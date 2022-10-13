/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
	interface Window extends OnLoadFn {
		turnstile?: TurnstileInstance
	}
}

interface OnLoadFn {
	[key: string]: () => void
}

/** Available methods in the turnstile instance */
export interface TurnstileInstance {
	/**
	 * Method to explicit render a widget.
	 * @param container -  Element ID or HTML node element.
	 * @param params -  Optional. Render parameter options. See {@link https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#configurations the docs} for more info about this options.
	 * @returns The rendered widget ID.
	 */
	render: (container?: string | HTMLElement, params?: RenderParameters) => string | undefined
	/**
	 * Method to reset a widget.
	 * @param id -  Optional. ID of the widget to reset, if not provided will target the last rendered widget.
	 */
	reset: (id?: string) => void
	/**
	 * Method to remove a widget.
	 * @param id -  Optional. ID of the widget to remove, if not provided will target the last rendered widget.
	 */
	remove: (id?: string) => void
	/**
	 * Method to get the token of a widget.
	 * @param id -  Optional. ID of the widget to get the token from, if not provided will target the last rendered widget.
	 * @returns The token response.
	 */
	getResponse: (id?: string) => string
}

/** Methods and states available for the Turnstile Reference */
export interface TurnstileRef extends Pick<TurnstileInstance, 'reset' | 'remove' | 'getResponse'> {
	/**
	 * ID of the current rendered widget.
	 */
	id: string | null | undefined
	/**
	 * Method to explicit render a widget.
	 * @returns The rendered widget ID.
	 */
	render: () => string | undefined
}

/** Common options for the `.render()` function and the `options` prop in the `<Turnstile />` component */
interface TurnstileBaseOptions {
	/**
	 * A customer value that can be used to differentiate widgets under the same sitekey in analytics and which is returned upon validation.
	 */
	action?: string
	/**
	 * A customer payload that can be used to attach customer data to the challenge throughout its issuance and which is returned upon validation.
	 */
	cData?: any
	/**
	 * The widget theme. This can be forced to light or dark by setting the theme accordingly.
	 *
	 * @default `auto`
	 */
	theme?: 'light' | 'dark' | 'auto'
}

/** Props needed for the `options` prop in the `<Turnstile />` component */
export interface ComponentOptions extends TurnstileBaseOptions {
	/**
	 * The tabindex of Turnstile’s iframe for accessibility purposes.
	 * @default 0
	 */
	tabIndex?: number
	/**
	 * Container ID or container node that will wrap the widget iframe.
	 *
	 */
	container?: string | HTMLElement
}

/** Props needed for the `.render()` function */
export interface RenderParameters extends TurnstileBaseOptions {
	/**
	 * Every widget has a sitekey. This sitekey is associated with the corresponding widget configuration and is created upon the widget creation.
	 */
	sitekey: string
	/**
	 * The tabindex of Turnstile’s iframe for accessibility purposes.
	 * @default 0
	 */
	tabindex?: number
	/**
	 * A JavaScript callback that is invoked upon success of the challenge. The callback is passed a token that can be validated.
	 * @param token - Token response.
	 */
	callback?: (token: string) => void
	/**
	 * A JavaScript callback that is invoked when a challenge expires.
	 */
	'expired-callback'?: () => void
	/**
	 * A JavaScript callback that is invoked when there is a network error.
	 */
	'error-callback'?: () => void
}

interface ScriptOptions {
	/**
	 * Custom nonce for the injected script.
	 * @default null
	 */
	nonce?: string
	/**
	 * Define if set the injected script as defer.
	 * @default true
	 */
	defer?: boolean
	/**
	 * Define if set the injected script as async.
	 * @default true
	 */
	async?: boolean
	/**
	 * Define if inject the script in the head or in the body.
	 * @default `head`
	 */
	appendTo?: 'head' | 'body'
	/**
	 * Custom ID of the injected script.
	 * @default `cf-turnstile-script`
	 */
	id?: string
	/**
	 * Custom name of the onload callback.
	 * @default `onloadTurnstileCallback`
	 */
	onLoadCallbackName?: string
}

/** `<Turnstile />` component props */
export interface TurnstileProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Every widget has a sitekey. This sitekey is associated with the corresponding widget configuration and is created upon the widget creation.
	 */
	siteKey: string
	/**
	 * Callback that is invoked upon success of the challenge. The callback is passed a token that can be validated.
	 * @param token - Token response.
	 */
	onLoad?: (token: string) => void
	/**
	 * Callback that is invoked when a challenge expires.
	 */
	onExpire?: () => void
	/**
	 * Callback that is invoked when there is a network error.
	 */
	onError?: () => void
	/**
	 * Custom widget render options. See {@link https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#configurations the docs} for more info about this options.
	 */
	options?: ComponentOptions
	/**
	 * Custom injected script options.
	 */
	scriptOptions?: ScriptOptions
}

export interface InjectTurnstileScriptParams {
	render: string
	onLoadCallbackName: string
	onLoad: () => void
	onError: () => void
	scriptOptions?: Omit<ScriptOptions, 'onLoadCallbackName'>
}

/**
 * See {@link https://developers.cloudflare.com/turnstile/get-started/server-side-validation/#error-codes the docs} for more info about this error codes.
 */
export type TurnstileValidationErrorCode =
	/** 	The secret parameter was not passed. */
	| 'missing-input-secret'
	/** 	The secret parameter was invalid or did not exist. */
	| 'invalid-input-secret'
	/** 	The response parameter was not passed. */
	| 'missing-input-response'
	/** 	The response parameter is invalid or has expired. */
	| 'invalid-input-response'
	/** 	The request was rejected because it was malformed. */
	| 'bad-request'
	/** 	The response parameter has already been validated before. */
	| 'timeout-or-duplicate'
	/** 	An internal error happened while validating the response. The request can be retried. */
	| 'internal-error'

export interface TurnstileValidationResponse {
	/** Indicate if the token validation was successful or not. */
	success: boolean
	/** The ISO timestamp for the time the challenge was solved. */
	challenge_ts?: string
	/** The hostname for which the challenge was served. */
	hostname?: string
	/** A list of errors that occurred. */
	'error-codes'?: TurnstileValidationErrorCode[]
	/** The customer widget identifier passed to the widget on the client side. This is used to differentiate widgets using the same sitekey in analytics. Its integrity is protected by modifications from an attacker. It is recommended to validate that the action matches an expected value. */
	action?: string
	/** The customer data passed to the widget on the client side. This can be used by the customer to convey state. It is integrity protected by modifications from an attacker. */
	cdata?: string
}

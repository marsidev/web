import { forwardRef, useEffect, useRef, useState } from 'react'
import { DEFAULT_CONTAINER_ID, DEFAULT_ONLOAD_NAME, injectTurnstileScript } from './utils'
import { RenderParameters, TurnstileProps, TurnstileRef } from './types'

export const Turnstile = forwardRef<TurnstileRef, TurnstileProps>((props, forwardedRef) => {
	const { scriptOptions, options, siteKey, onLoad, onExpire, onError, ...divProps } = props
	const { container, ...config } = options ?? {}

	const [widgetId, setWidgetId] = useState<string | undefined | null>()
	const containerRef = useRef<HTMLDivElement | null>(null)
	const firstRendered = useRef<boolean>(false)

	const containerId = typeof container === 'string' ? container : DEFAULT_CONTAINER_ID
	const onLoadCallbackName = scriptOptions?.onLoadCallbackName || DEFAULT_ONLOAD_NAME

	const scriptOptionsJson = JSON.stringify(scriptOptions)
	const configJson = JSON.stringify(config)

	const renderConfig: RenderParameters = {
		action: config.action,
		cData: config.cData,
		theme: config.theme,
		sitekey: siteKey,
		tabindex: config.tabIndex,
		callback: onLoad,
		'expired-callback': onExpire,
		'error-callback': onError
	}

	const onLoadScript = () => {
		if (!window || !window.turnstile) {
			return
		}

		if (forwardedRef !== null && typeof forwardedRef !== 'function') {
			const { turnstile } = window

			forwardedRef.current = {
				id: widgetId,
				getResponse: (id?: string) => {
					return turnstile.getResponse(id)
				},
				reset: (id?: string) => {
					return turnstile.reset(id)
				},
				remove: (id?: string) => {
					setWidgetId('')
					return turnstile.remove(id)
				},
				render: () => {
					if (forwardedRef.current?.id) {
						console.warn('Widget already rendered')
						return forwardedRef.current.id
					}

					if (!window.turnstile || !window.turnstile?.render) {
						console.warn('Turnstile has not been loaded')
						return
					}

					if (!containerRef.current) {
						console.warn('Container has not rendered')
						return
					}

					const id = turnstile.render(containerRef.current, renderConfig)
					setWidgetId(id)
					return id
				}
			}
		}
	}

	const onLoadScriptError = () => {
		console.error('Error loading turnstile script')
	}

	/** define onload function and inject turnstile script */
	useEffect(() => {
		if (!siteKey) {
			console.warn('sitekey was not provided')
			return
		}

		// define onLoad function if not exists
		window[onLoadCallbackName] = () => {
			if (!firstRendered.current) {
				const id = window.turnstile?.render(containerRef.current!, renderConfig)
				setWidgetId(id)
				firstRendered.current = true
			}
		}

		// inject turnstile script
		injectTurnstileScript({
			render: 'explicit',
			onLoadCallbackName,
			scriptOptions,
			onLoad: onLoadScript,
			onError: onLoadScriptError
		})

		/** Once a token has been issued, it can be validated within the next 300 seconds. After 300 seconds, the token is no longer valid and another challenge needs to be solved. */
		const timerId = setInterval(() => window.turnstile?.reset(), 250 * 250)

		return () => {
			clearInterval(timerId)
		}
	}, [configJson, scriptOptionsJson, container])

	useEffect(
		function rerenderWidget() {
			if (containerRef.current && window.turnstile) {
				const { turnstile } = window
				turnstile.remove(widgetId!)
				const id = turnstile.render(containerRef.current, renderConfig)
				setWidgetId(id)
				firstRendered.current = true
			}
		},
		[configJson]
	)

	useEffect(
		function updateWidgetId() {
			if (forwardedRef !== null && typeof forwardedRef !== 'function') {
				if (forwardedRef.current) {
					forwardedRef.current = {
						...forwardedRef.current,
						id: widgetId
					}
				}
			}
		},
		[widgetId]
	)

	return <div ref={containerRef} id={containerId} {...divProps} />
})

Turnstile.displayName = 'Turnstile'

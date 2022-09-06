import type { Plugins } from '@cloudinary/html'
import { memo, useMemo } from 'react'
import {
	AdvancedImage,
	accessibility,
	lazyload,
	placeholder,
	responsive
} from '@cloudinary/react'
import {
	UseCloudinaryImageProps,
	useCloudinaryImage
} from '~/hooks/use-cloudinary-image'

type NativeImgProps = React.ComponentPropsWithoutRef<'img'>

type ConditionalImageProps =
	| {
		lazyLoadPlugin?: boolean
		placeholderPlugin?: boolean
		responsivePlugin?: boolean
		accessibilityPlugin?: boolean
		customPlugins?: never
	  }
	| {
		lazyLoadPlugin?: never
		placeholderPlugin?: never
		responsivePlugin?: never
		accessibilityPlugin?: never
		customPlugins?: Plugins
	}

type CloudinaryImageProps =
	NativeImgProps &
	Pick<Required<NativeImgProps>, 'alt'> &
	UseCloudinaryImageProps &
	ConditionalImageProps

const Image: React.FC<CloudinaryImageProps> = props => {
	const {
		deliveryWidth,
		deliveryHeight,
		lazyLoadPlugin,
		placeholderPlugin,
		responsivePlugin,
		publicId,
		accessibilityPlugin,
		customPlugins,
		radius,
		deliveryFormat,
		deliveryQuality,
		brightness,
		...rest
	} = props

	const cldImage = useCloudinaryImage({
		deliveryWidth,
		deliveryHeight,
		radius,
		deliveryFormat,
		deliveryQuality,
		brightness,
		publicId
	})

	const fullRadius = radius === 'full'

	const plugins = useMemo(() => {
		const plugins: Plugins = []

		lazyLoadPlugin && plugins.push(lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.1 }))

		placeholderPlugin && plugins.push(placeholder({ mode: 'blur' }))

		accessibilityPlugin && plugins.push(accessibility())

		responsivePlugin && plugins.push(responsive({ steps: [600, 800, 1000, 1400] }))

		return plugins
	}, [lazyLoadPlugin, placeholderPlugin, accessibilityPlugin])

	return (
		<AdvancedImage
			cldImg={cldImage}
			plugins={customPlugins || plugins}
			style={{
				borderRadius: fullRadius ? 9999 : undefined
			}}
			{...rest}
		/>
	)
}

export const CloudinaryImage = memo(Image)
export default CloudinaryImage

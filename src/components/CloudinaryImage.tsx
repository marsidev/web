import type { Plugins } from '@cloudinary/html'
import { memo, useMemo } from 'react'
import {
	AdvancedImage,
	accessibility,
	lazyload,
	placeholder,
	responsive
} from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { byRadius, max } from '@cloudinary/url-gen/actions/roundCorners'
import { brightness as adjustBrightness } from '@cloudinary/url-gen/actions/adjust'
import { cloudinaryClient } from '~/utils/cloudinary'
import { Range } from '~/types'

type NativeImgProps = React.ComponentPropsWithoutRef<'img'>

interface CommonImageProps {
	publicId: string
	deliveryWidth?: number
	deliveryHeight?: number
	/**
	 * @description Rounds the corners of the image by specifying the pixels number or 'full' for a full rounded image.
	 */
	radius?: number | 'full'
	deliveryFormat?: 'auto' | 'webp' | 'png' | 'jpg' | 'bmp' | 'avif'
	deliveryQuality?:
	| 'auto'
	| 'auto:good'
	| 'auto:best'
	| 'auto:eco'
	| 'auto:low'
	| Range<1, 101>
	brightness?: number
}

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
	CommonImageProps &
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

	const fullRadius = radius === 'full'

	const cldImage = useMemo(() => {
		const image = cloudinaryClient.image(publicId)

		if (deliveryWidth && deliveryHeight) {
			image.resize(fill().width(deliveryWidth).height(deliveryHeight))
		} else if (!deliveryWidth && deliveryHeight) {
			image.resize(fill().height(deliveryHeight))
		} else if (deliveryWidth && !deliveryHeight) {
			image.resize(fill().width(deliveryWidth))
		}

		if (fullRadius) {
			image.roundCorners(max())
		} else if (radius) {
			image.roundCorners(byRadius(radius))
		}

		if (deliveryFormat) {
			image.format(deliveryFormat)
		} else {
			image.format('auto')
		}

		if (deliveryQuality) {
			image.quality(deliveryQuality)
		} else {
			image.quality('auto')
		}

		if (brightness) {
			image.adjust(adjustBrightness(brightness))
		}

		return image
	}, [
		deliveryWidth,
		deliveryHeight,
		radius,
		deliveryFormat,
		deliveryQuality,
		brightness,
		publicId
	])

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

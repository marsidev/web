import type { CloudinaryImage } from '@cloudinary/url-gen'
import { useMemo } from 'react'
import { pad } from '@cloudinary/url-gen/actions/resize'
import { byRadius, max } from '@cloudinary/url-gen/actions/roundCorners'
import { brightness as adjustBrightness } from '@cloudinary/url-gen/actions/adjust'
import type { Range } from '~/types/utils'
import { cloudinaryClient } from '~/utils/cloudinary'

export interface UseCloudinaryImageResult {
	subPath?: string
	src: string
	// publicId becomes `subPath + src`
	deliveryWidth?: number
	deliveryHeight?: number
	/**
	 * @description Rounds the corners of the image by specifying the pixels number or 'full' for a full rounded image.
	 */
	radius?: number | 'full'
	deliveryFormat?: 'auto' | 'webp' | 'png' | 'jpg' | 'bmp' | 'avif'
	deliveryQuality?: 'auto' | 'auto:good' | 'auto:best' | 'auto:eco' | 'auto:low' | Range<1, 101>
	brightness?: number
}

type UseCloudinaryImage = (props: UseCloudinaryImageResult) => CloudinaryImage

export const useCloudinaryImage: UseCloudinaryImage = props => {
	const {
		deliveryWidth,
		deliveryHeight,
		subPath,
		src,
		radius,
		deliveryFormat,
		deliveryQuality,
		brightness
	} = props

	const fullRadius = radius === 'full'

	const cldImage = useMemo(() => {
		const publicId = subPath ? `${subPath}${src}` : src
		const image = cloudinaryClient.image(publicId)

		if (deliveryWidth && deliveryHeight) {
			image.resize(pad().width(deliveryWidth).height(deliveryHeight))
		} else if (!deliveryWidth && deliveryHeight) {
			image.resize(pad().height(deliveryHeight))
		} else if (deliveryWidth && !deliveryHeight) {
			image.resize(pad().width(deliveryWidth))
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
		subPath,
		src
	])

	return cldImage
}

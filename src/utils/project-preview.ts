import type { ImageSize, ResponsiveSize } from '~/types'
import { remToPx } from '~/utils/units'

export const deliverySize: ResponsiveSize = {
	mobile: {
		width: 473,
		height: 958
	},
	desktop: {
		width: 1499,
		height: 861
	}
}

const desktopAspectRatio = deliverySize.desktop.height / deliverySize.desktop.width

const mobileAspectRatio = deliverySize.mobile.height / deliverySize.mobile.width

export const defaultMobileSize: ImageSize = {
	width: 120,
	height: Math.floor(120)
}

export const defaultDesktopSize: ImageSize = {
	width: 480,
	height: Math.floor(480)
}

export const getDimensions = (containerWidth: number, padding: number): ResponsiveSize => {
	const desktopWidth = Math.floor(containerWidth - padding)
	const desktopHeight = Math.floor(desktopWidth * desktopAspectRatio)

	const mobileWidth = Math.floor(containerWidth * 0.25)
	const mobileHeight = Math.floor(mobileWidth * mobileAspectRatio)

	return {
		desktop: {
			width: desktopWidth,
			height: desktopHeight
		},
		mobile: {
			width: mobileWidth,
			height: mobileHeight
		}
	}
}

export const getContainerHeight = (containerWidth: number) => {
	return Math.floor(containerWidth * desktopAspectRatio + remToPx(2))
}

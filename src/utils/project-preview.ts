import type { ImageDim } from '~/types'
import { remToPx } from '~/utils/units'

const desktopAspectRatio = 861 / 1499
const mobileAspectRatio = 958 / 473

export const defaultMobileDims: ImageDim = {
	width: 105,
	height: Math.floor(105)
}

export const defaultDesktopDims: ImageDim = {
	width: 388,
	height: Math.floor(388)
}

export const getDimensions = (containerWidth: number, padding: number) => {
	const desktopWidth = Math.floor(containerWidth - padding)
	const desktopHeight = Math.floor(desktopWidth * desktopAspectRatio)

	const mobileWidth = Math.floor(containerWidth * 0.25)
	const mobileHeight = Math.floor(mobileWidth * mobileAspectRatio)

	return {
		desktopWidth,
		desktopHeight,
		mobileWidth,
		mobileHeight
	}
}

export const getContainerHeight = (containerWidth: number) => {
	return Math.floor(containerWidth * desktopAspectRatio + remToPx(2))
}

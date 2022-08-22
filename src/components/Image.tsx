/* eslint-disable @typescript-eslint/indent */

/* inspired by https://gist.github.com/TheThirdRace/0f439acef8d9cb6bf5d7e69c54704086 */
import type { ImageProps as ChakraImageProps, ThemingProps } from '@chakra-ui/react'
import type { ImageProps as _NextImageProps } from 'next/image'
import type { ReactElement } from 'react'
import { chakra, useStyleConfig } from '@chakra-ui/react'
import NextImage from 'next/image'
import type { Sizes } from '~/utils/image'

// TODO review props when NextJs is updated so we don't have to defined it here
/**
 * Because NextJs typing is preventing auto-suggest for layout, width and height,
 * we declare the styles differently in this component and will manage the switch
 * to NextJs typings when calling NextJs `next/image` component
 */
type LayoutValue = 'fixed' | 'intrinsic' | 'responsive' | undefined

type LayoutAndSize =
| { layout: 'fill' }
| {
		layout: LayoutValue
		height: number
		width: number
	}

type NextImageProps =
	Pick<
		_NextImageProps,
		| 'className'
		| 'loading'
		| 'objectFit'
		| 'objectPosition'
		| 'priority'
		| 'quality'
		| 'src'
		| 'unoptimized'
	> &
		Pick<Required<_NextImageProps>, 'alt'> &
		Pick<ThemingProps, 'variant'> & {
			/** It's a way to pass the `width` and `height` of the image to the `next/image` component. */
			dimensions?: [number, number]
			layout?: 'fill' | LayoutValue
			sizes?: Sizes // could be a string too, this one is just a way to make it easier
		}

export type ImageProps = ChakraImageProps & NextImageProps
/* eslint-enable @typescript-eslint/indent */

/**
 * Wraps NextJs `next/image` component in Chakra's factory function
 * This is what will allow to use the theme and the styling properties on the component
 */
const ImageWithChakra = chakra(
	({
		className,
		dimensions = [0, 0],
		layout = 'fill',
		loading,
		objectFit,
		objectPosition,
		priority,
		quality,
		sizes,
		src,
		unoptimized,
		...restOfProps
	}: NextImageProps): ReactElement => {
		const [width, height] = dimensions

		const hasDims = height > 0 || width > 0

		const withDims = {
			height,
			layout: layout === 'fill' ? 'intrinsic' : layout,
			width
		}

		const layoutAndSize: LayoutAndSize = hasDims ? withDims : { layout: 'fill' }

		return (
			<NextImage
				className={className}
				loading={loading}
				objectFit={objectFit}
				objectPosition={objectPosition}
				priority={priority}
				quality={quality}
				sizes={sizes}
				src={src}
				unoptimized={unoptimized}
				{...layoutAndSize}
				{...restOfProps}
			/>
		)
	}
)

/**
 * This components serves as an interface to pass Chakra's styles.
 *
 * You can use the theme and/or styling properties (eg. `filter='brightness(0.90)'`)
 */
export const Image = ({ variant, ...props }: ImageProps): ReactElement => {
	const styles = useStyleConfig('Image', { variant })
	return <ImageWithChakra sx={styles} {...props} />
}

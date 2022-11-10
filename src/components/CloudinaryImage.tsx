/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Plugins } from '@cloudinary/html'
import { type FC, memo, useMemo } from 'react'
import { AdvancedImage, accessibility, placeholder as cldPlaceholder, lazyload, responsive } from '@cloudinary/react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { UseCloudinaryImageResult, useCloudinaryImage } from '~/hooks/use-cloudinary-image'

type NativeImageProps = React.ComponentPropsWithoutRef<'img'>

interface WithoutCustomPlugins {
	lazyLoadPlugin?: boolean
	placeholderPlugin?: boolean
	responsivePlugin?: boolean
	accessibilityPlugin?: boolean
	customPlugins?: never
}

interface WithCustomPlugins {
	lazyLoadPlugin?: never
	placeholderPlugin?: never
	responsivePlugin?: never
	accessibilityPlugin?: never
	customPlugins?: Plugins
}

interface WithNextImageProps extends NextImageProps {
	useNextImageInDevelopment?: boolean
}

type CloudinaryImageProps = NativeImageProps &
	Pick<Required<NativeImageProps>, 'alt' | 'width' | 'height'> &
	UseCloudinaryImageResult &
	(WithoutCustomPlugins | WithCustomPlugins) &
	WithNextImageProps

const Image: FC<CloudinaryImageProps> = props => {
	const {
		deliveryWidth,
		deliveryHeight,
		lazyLoadPlugin,
		placeholderPlugin,
		responsivePlugin,
		src,
		subPath,
		accessibilityPlugin,
		customPlugins,
		radius,
		deliveryFormat,
		deliveryQuality,
		brightness,
		alt,
		placeholder,
		useNextImageInDevelopment,
		onLoad,
		priority,
		style,
		...rest
	} = props

	const shouldRenderNextImage = process.env.NODE_ENV === 'development' && Boolean(useNextImageInDevelopment)

	const cldImage = useCloudinaryImage({
		deliveryWidth,
		deliveryHeight,
		radius,
		deliveryFormat,
		deliveryQuality,
		brightness,
		src,
		subPath
	})

	const fullRadius = radius === 'full'

	const plugins = useMemo(() => {
		if (shouldRenderNextImage) return []

		const plugins: Plugins = []

		lazyLoadPlugin && plugins.push(lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.1 }))

		placeholderPlugin && plugins.push(cldPlaceholder({ mode: 'blur' }))

		accessibilityPlugin && plugins.push(accessibility())

		responsivePlugin && plugins.push(responsive({ steps: [600, 800, 1000, 1400] }))

		return plugins
	}, [lazyLoadPlugin, placeholderPlugin, accessibilityPlugin])

	if (shouldRenderNextImage) {
		return (
			<NextImage
				unoptimized
				alt={alt}
				priority={priority}
				src={src}
				// @ts-ignore
				onLoadingComplete={onLoad}
				{...rest}
				style={{
					...style,
					borderRadius: fullRadius ? 9999 : style?.borderRadius
				}}
			/>
		)
	}

	return (
		<AdvancedImage
			alt={alt}
			cldImg={cldImage}
			placeholder={placeholder}
			plugins={customPlugins || plugins}
			style={{
				...style,
				borderRadius: fullRadius ? 9999 : style?.borderRadius
			}}
			onLoad={onLoad}
			{...rest}
		/>
	)
}

export const CloudinaryImage = memo(Image)

import {
	Flex,
	type FlexProps,
	Skeleton,
	useBreakpointValue,
	useColorModeValue
} from '@chakra-ui/react'
import { Atropos } from 'atropos/react'
import { useState } from 'react'
import { Project } from '~/types'
import { CloudinaryImage } from '~/components/CloudinaryImage'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectPreview: React.FC<ProjectProps> = ({
	project: p,
	...props
}) => {
	const bg = useColorModeValue('gray.100', 'gray.700')
	const borderColor = useColorModeValue('gray.200', 'gray.600')
	const previewPadding = useBreakpointValue({ base: '1em', sm: '1.6em', md: '2em' })
	const [desktopLoaded, setDesktopLoaded] = useState<boolean>(false)
	const [mobileLoaded, setMobileLoaded] = useState<boolean>(false)
	const loaded = desktopLoaded && mobileLoaded

	return (
		<Flex
			bg={bg}
			border='1px solid'
			borderColor={borderColor}
			borderRadius={{ base: 8, md: 16 }}
			justify='center'
			pos='relative'
			{...props}
		>
			<Skeleton
				borderRadius={{ base: 8, md: 16 }}
				fadeDuration={1}
				isLoaded={loaded}
			>
				<Atropos
					className='project-preview'
					rotateTouch='scroll-y'
					rotateXMax={24}
					rotateYMax={24}
					shadow={false}
				>
					<CloudinaryImage
						alt={`${p.name} desktop preview`}
						className='project-preview-desktop'
						data-atropos-offset='-4'
						lazyLoadPlugin={true}
						placeholderPlugin={true}
						publicId={`marsidev${p.images!.desktop}`}
						style={{
							padding: previewPadding
						}}
						onLoad={() => setDesktopLoaded(true)}
					/>

					<CloudinaryImage
						alt={`${p.name} mobile preview`}
						className='project-preview-mobile'
						data-atropos-offset='8'
						lazyLoadPlugin={true}
						placeholderPlugin={true}
						publicId={`marsidev${p.images!.mobile}`}
						onLoad={() => setMobileLoaded(true)}
					/>
				</Atropos>
			</Skeleton>
		</Flex>
	)
}

export default ProjectPreview

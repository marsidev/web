import {
	Flex,
	type FlexProps,
	useBreakpointValue,
	useColorModeValue
} from '@chakra-ui/react'
import { Atropos } from 'atropos/react'
import { Project } from '~/types'
import { CloudinaryImage } from '~/components'

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
				/>

				<CloudinaryImage
					alt={`${p.name} mobile preview`}
					className='project-preview-mobile'
					data-atropos-offset='8'
					lazyLoadPlugin={true}
					placeholderPlugin={true}
					publicId={`marsidev${p.images!.mobile}`}
				/>
			</Atropos>
		</Flex>
	)
}

export default ProjectPreview

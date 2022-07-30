import { Flex, type FlexProps, Image } from '@chakra-ui/react'

interface ProjectProps extends FlexProps {
	project: ProjectType
}

export const ProjectPreview: React.FC<ProjectProps> = ({ project: p, ...props }) => {
	return (
		<Flex
			bg='gray.700'
			borderRadius={16}
			justify='center'
			pos='relative'
			px={8}
			py={8}
			{...props}
		>
			<Image
				alt={`${p.name} mobile preview`}
				height='auto'
				left='10%'
				maxW='170px'
				objectFit='contain'
				pos='absolute'
				src={p.images.mobile}
				top='50%'
				transform='translateY(-54%)'
				width='full'
				zIndex={2}
			/>

			<Image
				alt={`${p.name} desktop preview`}
				height='auto'
				maxW='lg'
				objectFit='contain'
				pos='relative'
				src={p.images.desktop}
				width='full'
				zIndex={1}
			/>
		</Flex>
	)
}

export default ProjectPreview

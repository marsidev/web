import { Flex, type FlexProps, Image } from '@chakra-ui/react'
import { Hover3D } from '~/components'

interface ProjectProps extends FlexProps {
	project: ProjectType
}

export const ProjectPreview: React.FC<ProjectProps> = ({
	project: p,
	...props
}) => {
	return (
		<Flex
			bg='gray.700'
			borderRadius={16}
			justify='center'
			pos='relative'
			{...props}
		>
			<Hover3D>
				<Image
					alt={`${p.name} mobile preview`}
					data-atropos-offset='8'
					height='auto'
					left='5%'
					maxW='180px'
					objectFit='contain'
					pos='absolute'
					src={p.images.mobile}
					top='10%'
					width='full'
					zIndex={2}
				/>

				<Image
					alt={`${p.name} desktop preview`}
					height='auto'
					maxW='lg'
					objectFit='contain'
					pos='relative'
					py={8}
					src={p.images.desktop}
					width='full'
					zIndex={1}
				/>
			</Hover3D>
		</Flex>
	)
}

export default ProjectPreview

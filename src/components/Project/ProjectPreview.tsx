import { Flex, type FlexProps, Image, useColorModeValue } from '@chakra-ui/react'
import { Hover3D } from '~/components'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectPreview: React.FC<ProjectProps> = ({
	project: p,
	...props
}) => {
	const bg = useColorModeValue('gray.100', 'gray.700')
	const borderColor = useColorModeValue('gray.200', 'gray.600')

	return (
		<Flex
			bg={bg}
			border='1px solid'
			borderColor={borderColor}
			borderRadius={16}
			justify='center'
			pos='relative'
			px={2}
			{...props}
		>
			<Hover3D>
				<Image
					alt={`${p.name} mobile preview`}
					data-atropos-offset='8'
					height='auto'
					left='5%'
					maxW={{ base: '6em', sm: '8em', md: '8em', lg: '9em' }}
					objectFit='contain'
					pos='absolute'
					src={p.images!.mobile}
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
					src={p.images!.desktop}
					width='full'
					zIndex={1}
				/>
			</Hover3D>
		</Flex>
	)
}

export default ProjectPreview

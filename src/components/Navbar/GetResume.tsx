import type { FC } from 'react'
import type { ButtonProps, MenuProps } from '@chakra-ui/react'
import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	chakra
} from '@chakra-ui/react'
import { ChevronDownIcon, DownloadIcon, NotionIcon } from '~/icons'
import { Link } from '../Link'

type GetResumeProps = Omit<MenuProps, 'children'>

const btnStyles: ButtonProps = {
	_active: {
		bgPosition: 'right center'
	},
	_hover: {
		bgPosition: 'right center'
	},
	bgGradient: 'linear(-45deg, pink.600 0%, pink.400 50%, pink.600 100%)',
	bgSize: '200% auto',
	color: 'white',
	fontWeight: '700',
	rounded: 'lg',
	transition: 'all 300ms ease-in-out'
}

const ResumeButton: FC<ButtonProps> = ({ ...props }) => {
	return (
		<MenuButton
			as={Button}
			rightIcon={<ChevronDownIcon />}
			{...btnStyles}
			{...props}
		>
			Get Resume
		</MenuButton>
	)
}

export const GetResume: FC<GetResumeProps> = ({ ...props }) => {
	return (
		<Menu {...props}>
			<ResumeButton />
			<MenuList>
				<Link isExternal href='https://bit.ly/marsicv'>
					<MenuItem>
						<NotionIcon />
						<chakra.span ml={2}>Read in Notion</chakra.span>
					</MenuItem>
				</Link>

				<Link isExternal download='Luis Eduardo Marsiglia Resume' href='/resume.pdf'>
					<MenuItem>
						<DownloadIcon />
						<chakra.span ml={2}>Download PDF</chakra.span>
					</MenuItem>
				</Link>
			</MenuList>
		</Menu>
	)
}

export default GetResume

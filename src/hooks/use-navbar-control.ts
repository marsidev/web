import { useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { useRendered, useScrollY } from '@marsidev/react-hooks'
import { useAtom } from 'jotai'
import { useEffect, useMemo, useRef } from 'react'
import { mobileMenuAtom, navbarHeightAtom } from '~/store'
import useCssVars from './use-css-vars'

export const useNavbarControl = () => {
	const offset = useBreakpointValue({ base: 68, md: 96 }) // <- 68 and 96 are navbar height - measured manually
	const { offsetPassed, scrollDirection } = useScrollY(offset)
	const themedBg = useColorModeValue('white', 'gray.800')
	const themedBgAfterOffset = useColorModeValue('whiteAlpha.500', 'rgba(26, 32, 44, 0.74)')
	const rendered = useRendered()
	const [menuExpanded] = useAtom(mobileMenuAtom)
	const [_, setNavbarHeight] = useAtom(navbarHeightAtom)
	useCssVars(scrollDirection) // <- update css var
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		ref.current && setNavbarHeight(ref.current.clientHeight)
	}, [ref.current?.clientHeight])

	const backgroundColor = useMemo(() => {
		if (!rendered) return 'auto'
		if (menuExpanded) return themedBg
		if (offsetPassed) return themedBgAfterOffset
		return themedBg
	}, [rendered, offsetPassed, menuExpanded, themedBg, themedBgAfterOffset])

	const backdropFilter = useMemo(() => {
		if (rendered && offsetPassed) return 'saturate(180%) blur(8px)'
		return 'none'
	}, [rendered, offsetPassed])

	return {
		offsetPassed,
		scrollDirection,
		backgroundColor,
		backdropFilter,
		ref
	}
}

export default useNavbarControl

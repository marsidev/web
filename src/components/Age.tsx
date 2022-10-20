import { type FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Code, type CodeProps } from '@chakra-ui/layout'

interface AgeProps extends CodeProps {
	date: Date | string | number
	compact?: boolean
}

export const Age: FC<AgeProps> = ({ date, compact, ...rest }) => {
	const [age, setAge] = useState<string>('...')
	const [isCompact, setIsCompact] = useState(compact ?? true)

	const dateFrom = useMemo(() => new Date(date), [date])

	const roundFormat = useMemo(() => {
		const decimals = isCompact ? 2 : 8

		return new Intl.NumberFormat('en-US', {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		})
	}, [isCompact])

	const getAge = useCallback(() => {
		const msAge = Date.now() - dateFrom.getTime()
		const years = msAge / 31557600000 // Divide by 1000*60*60*24*365.25
		const age = roundFormat.format(years)
		return age
	}, [roundFormat])

	useEffect(() => {
		const step = isCompact ? 1000 : 100
		setAge(getAge())

		const timer = setInterval(() => {
			setAge(getAge())
		}, step)

		return () => {
			clearTimeout(timer)
		}
	}, [isCompact, compact])

	return (
		<Code cursor='pointer' onClick={() => setIsCompact(prev => !prev)} {...rest}>
			{age}
		</Code>
	)
}

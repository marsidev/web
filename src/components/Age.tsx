import { type FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Code, type CodeProps } from '@chakra-ui/layout'
import { useBoolean } from '@chakra-ui/hooks'

interface AgeProps extends CodeProps {
	date: Date | string | number
	compact?: boolean
}

export const Age: FC<AgeProps> = ({ date, compact, ...rest }) => {
	const [age, setAge] = useState<string>('...')
	const [isCompactMode, setMode] = useBoolean(compact ?? true)

	const dateFrom = useMemo(() => new Date(date), [date])

	const roundFormat = useMemo(() => {
		const decimals = isCompactMode ? 2 : 8

		return new Intl.NumberFormat('en-US', {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		})
	}, [isCompactMode])

	const getAge = useCallback(() => {
		const msAge = Date.now() - dateFrom.getTime()
		const years = msAge / 31557600000 // Divide by 1000*60*60*24*365.25
		const age = roundFormat.format(years)
		return age
	}, [roundFormat])

	useEffect(() => {
		const step = isCompactMode ? 1000 : 100
		setAge(getAge())

		const timer = setInterval(() => {
			setAge(getAge())
		}, step)

		return () => {
			clearTimeout(timer)
		}
	}, [isCompactMode, compact])

	return (
		<Code cursor='pointer' onClick={setMode.toggle} {...rest}>
			{age}
		</Code>
	)
}

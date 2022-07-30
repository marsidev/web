import AtroposReact, { type Atropos } from 'atropos/react'

interface Hover3DProps extends Atropos {
	children: React.ReactNode
}

export const Hover3D: React.FC<Hover3DProps> = ({ children }) => {
	return (
		<AtroposReact
			activeOffset={40}
			// className='my-atropos'
			shadow={false}
			// shadowScale={1.05}
			// style={{ padding: '2rem' }}
		>
			{children}
		</AtroposReact>
	)
}

export type Merge<P, T> = Omit<P, keyof T> & T

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

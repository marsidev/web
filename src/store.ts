import { atom } from 'jotai'
import type { Section } from '~/types'

export const mobileMenuAtom = atom(false)
export const navbarHeightAtom = atom(0)
export const currentSectionAtom = atom<Section>('home')

// export const closeMenuAtom = atom(null, (_get, set) => set(mobileMenuAtom, false))

// export const toggleMenuAtom = atom(null, (_get, set) =>
// 	set(mobileMenuAtom, !mobileMenuAtom)
// )

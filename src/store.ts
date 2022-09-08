import { atom } from 'jotai'
import type { Section } from '~/types'

export const mobileMenuAtom = atom(false)
export const navbarHeightAtom = atom(0)
export const activeSectionAtom = atom<Section>('home')

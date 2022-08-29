import { atom } from 'jotai'

export const menuOpen = atom<boolean>(false)
export const closeMenu = atom(null, (_get, set) => set(menuOpen, false))
export const toggleMenu = atom(null, (_get, set) => set(menuOpen, !menuOpen))

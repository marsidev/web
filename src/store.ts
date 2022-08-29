import { atom } from 'jotai'
export const mobileMenuAtom = atom(false)
export const navbarHeightAtom = atom(0)

// export const closeMenuAtom = atom(null, (_get, set) => set(mobileMenuAtom, false))

// export const toggleMenuAtom = atom(null, (_get, set) =>
// 	set(mobileMenuAtom, !mobileMenuAtom)
// )

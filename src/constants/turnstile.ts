const DEV_MODE = typeof process !== 'undefined' && !!process.env && process.env.NODE_ENV !== 'production'

/** testing secret keys */
// const secretKey = '1x0000000000000000000000000000000AA' // <- always pass
// const secretKey = '2x0000000000000000000000000000000AA' // <- always fail
// const secretKey = '3x0000000000000000000000000000000AA' // <- yields a “token already spent” error
export const SECRET_KEY = DEV_MODE ? '1x0000000000000000000000000000000AA' : process.env.TURNSTILE_SECRET_KEY || ''

/** testing siteKey keys */
// const siteKey = '1x00000000000000000000AA' // <- always pass
// const siteKey = '2x00000000000000000000AB' // <- always fail
// const siteKey = '3x00000000000000000000FF' // <- forces an interactive challenge
export const SITE_KEY = DEV_MODE ? '1x00000000000000000000AA' : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

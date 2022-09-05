import type { NextjsOptions } from '@sentry/nextjs/types/utils/nextjsOptions'
import * as Sentry from '@sentry/nextjs'

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN

export const sentryConfig: NextjsOptions = {
	dsn,
	enabled: !!dsn,
	environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'unset',
	tracesSampleRate: 1.0
}

Sentry.init(sentryConfig)

import { existsSync, readFileSync } from 'fs'
import { extname, join } from 'path'

/**
 * Checks if the file exits and if so, return it.
 *
 * @param sourcePath - The path of the file.
 *
 * @returns The content of the file.
 */
export function loadFile(sourcePath: string): string {
	const path = join(process.cwd(), sourcePath)

	if (!existsSync(path)) {
		throw Error(`File not found ${sourcePath}`)
	}

	if (extname(path) === '.json') {
		return require(path)
	} else {
		return readFileSync(path, { encoding: 'utf8' })
	}
}

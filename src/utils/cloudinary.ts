/* eslint-disable no-multiple-empty-lines */
import { Cloudinary } from '@cloudinary/url-gen'

export const cloudinaryClient = new Cloudinary({
	cloud: {
		cloudName: 'marsiglia'
	}
})


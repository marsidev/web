import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { config } from '~/theme'

class Document extends NextDocument {
	static getInitialProps(ctx: DocumentContext) {
		return NextDocument.getInitialProps(ctx)
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<ColorModeScript initialColorMode={config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document

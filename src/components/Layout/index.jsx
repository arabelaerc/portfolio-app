import LayersProvider from '../../context/layers/LayersProvider'
import { Footer } from '../Footer'
import { Header } from '../Header'

export function Layout(props) {
	const {
		children
	} = props

	return (
		<LayersProvider>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</LayersProvider>
	)
}

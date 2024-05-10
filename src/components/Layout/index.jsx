import LayersProvider from '../../context/layers/LayersProvider'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Layers } from '../../components/Layers'


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
			<Layers />
		</LayersProvider>
	)
}

import Introduce from './components/Introduce'
import Skills from './components/Skills'
import About from './components/About'
import { Experience } from './components/Experience'
import Projects from './components/Projects'
import Talk from './components/Talk'

export default function Home() {

	return (
		<>
			<Introduce />
			<Skills />
			<Experience />
			<About />
			<Projects />
			<Talk />
		</>
	)
}

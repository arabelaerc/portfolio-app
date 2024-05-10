
import style from './style.module.scss'
import { useLayerContext } from '../../../../context/layers/LayersProvider'


export function Experience() {

	const { currentSkill } = useLayerContext()

	return (
		<section className={style.experience}>
			<h2>My Experience</h2>
			<div className="container">
				<h3>{currentSkill.title}</h3>
				<p>{currentSkill.description}</p>
			</div>
		</section>
	)
}
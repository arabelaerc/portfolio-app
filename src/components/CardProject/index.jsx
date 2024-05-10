import Image from '../Image'
import style from './style.module.scss'

export default function CardProject({ project }) {
	return (
		<div className={style.projectCard}>
			<Image image={project.image} />
			<div className={style.projectCardContent}>
				<span>{project.number}</span>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
			</div>
		</div>
	)
}

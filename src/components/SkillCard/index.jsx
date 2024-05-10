import style from './style.module.scss'
import * as TYPE from '../../context/layers/LayersTypes'
import { useLayerContext } from '../../context/layers/LayersProvider'

export function SkillCard({ skill }) {
	const { dispatch } = useLayerContext()


	function updateCurrentSkill(skill) {
		dispatch({
			type: TYPE.UPDATE_CURRENT_SKILL,
			payload: skill
		})
	}

	return (
		<button
			className={style.skillCard}
			onClick={() => updateCurrentSkill(skill)}
		>

			<img src={skill.icon} />
			{skill.title}
		</button>
	);
};

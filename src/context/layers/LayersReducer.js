import * as TYPE from './LayersTypes'

export default function reducer(state, action) {
	const { type, payload } = action

	switch (type) {
		case TYPE.UPDATE_CURRENT_SKILL:
			return {
				currentSkill: payload
			}
		default:
			return state
	}
}

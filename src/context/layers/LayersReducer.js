import * as TYPE from './LayersTypes'

export default function reducer(state, action) {
	const { type, payload } = action

	switch (type) {
		case TYPE.UPDATE_CURRENT_SKILL:
			return {
				currentSkill: payload
			}
		case TYPE.TOGGLE_MODAL_REGISTER:
			return {
				...state,
				modalRegister: payload
			}
		default:
			return state
	}
}

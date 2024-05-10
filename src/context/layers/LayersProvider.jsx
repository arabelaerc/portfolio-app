import { createContext, useContext, useReducer } from 'react'
import reducer from './LayersReducer'

const initialState = {
	currentSkill: {
		id: '01',
		title: "Git",
		description: "Front-end developer proficient in Git Flow methodology, adept at branching, merging, and resolving conflicts. Experienced in managing feature branches, release branches, and hotfixes effectively. Utilized Git Flow to streamline collaboration within development teams, ensuring smooth integration and deployment processes. Implemented best practices for version control, ensuring code quality and project stability. Familiar with Git Flow's role in facilitating continuous integration and delivery workflows.",
	},
}

const LayerContext = createContext()

function LayersProvider({ children }) {

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<LayerContext.Provider value={{
			currentSkill: state.currentSkill,
			dispatch
		}}>
			{children}
		</LayerContext.Provider>
	)
}

function useLayerContext() {
	return useContext(LayerContext)
}

export default LayersProvider
export {
	useLayerContext
}

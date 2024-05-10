// import style from './style.module.scss'

export default function Image({ image }) {

	return (
		<img
			src={`/images/${image?.name}.${image?.ext}`}
			srcSet={`/images/${image?.name}.${image?.ext} 1x, /images/${image?.name}@2x.${image?.ext} 2x`}
		/>
	)
}

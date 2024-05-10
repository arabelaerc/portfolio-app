import style from './style.module.scss'

export default function About() {

	return (
		<section className={style.about}>
			<div className={`${style.container} container`}>
				<div className={style.image}>
					<img src='/images/aboutme-arabela.svg' />
				</div>
				<div className={style.content}>
					<h2>About me</h2>
					<p>Arabela is a Front End Developer with 8 years of experience, she has worked in Marketing, IT, Banking, Education, Telecom industries in Peru and USA, She has creativity for resolve, create and adaptation to different environments and culture. She has the ability of leadership, being responsible for managing teamwork, good communicator and always looking for innovation and help to grow the project. Also experienced in Design.</p>
				</div>
			</div>
		</section>
	)
}

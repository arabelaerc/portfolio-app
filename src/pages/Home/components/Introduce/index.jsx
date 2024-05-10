import style from './style.module.scss'

export default function Introduce() {

	return (
		<section className={style.introduce}>
			<div className='container'>
				<div>
					<h1>
						Hello I'am <b>Arabela Rojas.</b>
						<p>Frontend Developer</p>
					</h1>
					<p>Versatile professional with expertise in web design, development, and management. Empowered young women through tech careers at Laboratoria. Known for creativity, responsibility, and adaptability. Thrives in fast-paced environments, excels in problem-solving. Dedicated to driving innovation and inclusion.</p>
				</div>
				<img src='/images/introduce-arabela.svg' />
			</div>
		</section>
	)
}

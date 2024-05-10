import style from './style.module.scss'

export default function Talk() {

	return (
		<section className={style.talk}>
			<div className={`${style.container} container`}>
				<form className={style.form}>
					<input type='text' placeholder='Your name'></input>
					<input type='email' placeholder='Email'></input>
					<textarea placeholder='How can i help?'></textarea>
					<button type='submit'>Get in touch</button>
				</form>
				<div className={style.content}>
					<h2>Let's talk for something special</h2>
					<p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
					<p>arabelarc@gmail.com</p>
					<p>(+51) 999999999</p>
				</div>
			</div>
		</section>
	)
}

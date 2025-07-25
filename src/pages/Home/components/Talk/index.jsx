import style from './style.module.scss'
import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import * as TYPE from '../../../../context/layers/LayersTypes'
import { useLayerContext } from '../../../../context/layers/LayersProvider'

export default function Talk({ id }) {
	const form = useRef();
	const { dispatch } = useLayerContext()

	// const sendEmail = (e) => {
	// 	e.preventDefault();

	// 	emailjs
	// 		.sendForm('service_n0ioqwb', 'contact_form', form.current, {
	// 			publicKey: '18EsqdkgehwrsM9ik',
	// 		})
	// 		.then(
	// 			() => {
	// 				dispatch({
	// 					type: TYPE.TOGGLE_MODAL_REGISTER,
	// 					payload: true
	// 				})
	// 			},
	// 			(error) => {
	// 				console.log('FAILED...', error.text);
	// 			},
	// 		);
	// };

	return (
		<section className={style.talk} id={id}>
			<div className={`${style.container} container`}>
				{/* <form className={style.form} ref={form} onSubmit={sendEmail}>
					<input type='text' placeholder='Your name' name="user_name"></input>
					<input type='email' placeholder='Email' name="user_email"></input>
					<textarea placeholder='How can i help?' name="message"></textarea>
					<button type='submit'>Get in touch</button>
				</form> */}

				<div className={style.content}>
					<h2>Let's talk for something special</h2>
					<p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
					<p><a href="mailto:arabelarc@gmail.com">arabelarc@gmail.com</a></p>
					<p>Hablemos por mensaje <a href="https://api.whatsapp.com/send?phone=+3460346325&text=Hola%20quiero%20contactar%20contigo%20para%20una%20cotizaci%C3%B3n" target='_blank'>aquí</a></p>
				</div>
				<div>
					<img width='400px' src='/images/talk-arabela.svg' />
				</div>
			</div>
		</section>
	)
}

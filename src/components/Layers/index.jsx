import React from 'react'
import { Modal } from '../Modal'
import { useLayerContext } from '../../context/layers/LayersProvider'
import * as TYPE from '../../context/layers/LayersTypes'
import style from './style.module.css'
import { Congrats } from '../Congrats'


export function Layers() {
	const { modalRegister } = useLayerContext()

	return (
		<section className={style.layer}>
			{modalRegister && <Modal component={Congrats} dispatchType={TYPE.TOGGLE_MODAL_REGISTER} />}
		</section>
	)
}

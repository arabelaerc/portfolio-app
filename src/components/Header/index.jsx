import style from './style.module.scss'
import { downloadFile } from '../../utils/downLoadFile'

export function Header() {
	return (
		<header className={style.header}>
			<div className='container'>
				<p>arabela</p>
				<div className={style.list}>
					<button
						onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
						About me
					</button>
					<button
						onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
						Skills
					</button>
					<button
						onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
						Project
					</button>
					<button
						onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
						Contact me
					</button>
				</div>
				<button onClick={downloadFile}>
					Resume <img src='/images/icon-download.svg' />
				</button>
			</div >
		</header >
	)
}

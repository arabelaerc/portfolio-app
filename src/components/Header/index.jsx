import style from './style.module.scss'

export function Header() {
	const downloadFile = () => {
		const fileUrl = 'public/Arabela-Rojas_Web_UI_Developer_SSr_Addv.pdf';

		// Create a link element
		const link = document.createElement('a');
		link.href = fileUrl;

		// Set the download attribute to specify the filename
		link.setAttribute('download', 'Arabela-Rojas_Web_UI_Developer_SSr_Addv.pdf');

		// Append the link to the document body
		document.body.appendChild(link);

		// Programmatically click the link to trigger the download
		link.click();

		// Remove the link from the document body
		document.body.removeChild(link);
	};

	return (
		<header className={style.header}>
			<div className='container'>
				<img src='/images/logo-ara.svg' />
				<nav>
					<a href="">About me</a>
					<a href="">Skills</a>
					<a href="">Project</a>
					<a href="">Contact me</a>
				</nav>
				<button onClick={downloadFile}>
					Resume <img src='/images/icon-download.svg' />
				</button>
			</div>
		</header>
	)
}

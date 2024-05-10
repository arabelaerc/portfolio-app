export function downloadFile() {
	const fileUrl = 'public/Arabela-Rojas_Web_UI_Developer_SSr_Addv.pdf';
	const link = document.createElement('a');
	link.href = fileUrl;
	link.setAttribute('download', 'Arabela-Rojas_Web_UI_Developer_SSr_Addv.pdf');
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
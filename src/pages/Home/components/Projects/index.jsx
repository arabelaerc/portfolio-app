import CardProject from '../../../../components/CardProject'
import style from './style.module.scss'

export default function Projects() {

	const projects = [
		{
			number: '01',
			image: {
				name: 'project-1',
				ext: 'jpg'
			},
			title: 'Entel Perú',
			description: 'Managed a team of developers, supporting them in feature development and content updates on Wordpress, Oracle CMS, and Vtex platforms. Organized team data and conducted ceremonies before every sprint for streamlined workflow. Developed new landing pages for campaigns and promotions using JavaScript and jQuery. Contributed to the development of new landing pages for short-term projects and supported the team for http://www.entel.pe/.',
		},
		{
			number: '02',
			image: {
				name: 'project-2',
				ext: 'jpg'
			},
			title: 'Entel Perú Catálogo',
			description: 'Developed new landing pages for campaigns and promotions using JavaScript and jQuery. Collaborated with the client team on Vtex to create a new ecommerce platform in Peru (https://catalogo.entel.pe).',
		},
		{
			number: '03',
			image: {
				name: 'project-3',
				ext: 'jpg'
			},
			title: 'OKA Fintech',
			description: 'In my role, I introduced methodologies to foster reusable components and efficient code sharing, implementing a structured helper system for component organization. As a Team Lead, I oversaw task assignment, managed team data, conducted ceremonies, and ensured project quality. Developed features as per sprint goals, prioritizing timely delivery. Provided support to the core and design teams, facilitating task organization for each sprint. Utilized Jira, Trello, Google Apps, React JSX, Git, and Github in daily operations.',
		}
	]

	return (
		<section className={style.projects}>
			<div className='container'>
				<h2>My <b>Projects</b></h2>

				<div className={style.projectsWrapper}>
					{
						projects.map(project => (
							<CardProject project={project} key={project.number} />
						))
					}
				</div>
			</div>
		</section>
	)
}

import { SkillCard } from '../../../../components/SkillCard'
import style from './style.module.scss'

export default function Skills() {

	const skills = [
		{
			id: '01',
			title: "Git",
			icon: '/images/icon-git.svg',
			description: "Front-end developer proficient in Git Flow methodology, adept at branching, merging, and resolving conflicts. Experienced in managing feature branches, release branches, and hotfixes effectively. Utilized Git Flow to streamline collaboration within development teams, ensuring smooth integration and deployment processes. Implemented best practices for version control, ensuring code quality and project stability. Familiar with Git Flow's role in facilitating continuous integration and delivery workflows.",
		},
		{
			id: '02',
			title: "JavaScript",
			icon: '/images/icon-javascript.svg',
			description: "Experienced front-end developer proficient in JavaScript, with a strong track record of leveraging the language to build interactive and dynamic web applications. Skilled in modern JavaScript frameworks such as React and Vue.js, utilizing their capabilities to develop responsive user interfaces and enhance user experiences. Proficient in vanilla JavaScript, adept at implementing complex functionalities and solving challenges efficiently. Experienced in working with asynchronous programming concepts such as Promises and Async/Await to manage asynchronous tasks effectively. Continuously learning and adapting to new JavaScript trends and best practices to deliver high-quality, scalable solutions.",
		},
		{
			id: '03',
			title: "Sass",
			icon: '/images/icon-sass.svg',
			description: "Skilled front-end developer with extensive experience in Sass (Syntactically Awesome Style Sheets). Proficient in leveraging Sass's features like variables, mixins, and nesting to streamline CSS development. Utilized Sass to enhance code maintainability and scalability, resulting in more efficient styling workflows. Implemented modular stylesheets using Sass partials, enabling easy code organization and reusability. Applied Sass's capabilities to create responsive and visually appealing user interfaces, optimizing CSS output for improved performance.",
		},
		{
			id: '04',
			title: "Storybook",
			icon: '/images/icon-storybook.svg',
			description: "Front-end developer with experience using Storybook for UI component development. Familiar with creating isolated development environments for individual components, allowing for efficient testing and debugging. Utilized Storybook to document and showcase UI components, facilitating collaboration within the development team. Implemented Storybook's addon ecosystem to enhance component functionalities and visualization. Continuously exploring Storybook's features to improve workflow efficiency and deliver polished user interfaces.",
		},
	];

	return (
		<section className={style.skills}>
			<h2>My Skills</h2>

			<div className="container">
				{skills?.map((skill) => (
					<SkillCard skill={skill} key={skill.id} />
				))}
			</div>
		</section>
	)
}

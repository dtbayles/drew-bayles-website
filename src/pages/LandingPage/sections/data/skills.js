import {
	SiCplusplus,
	SiCss3,
	SiFlutter,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiReact,
	SiSwift,
	SiTypescript,
} from "react-icons/si";
import { DiGoogleCloudPlatform, DiJava, DiPython } from "react-icons/di";
import { FaAws } from "react-icons/fa";

const skillsData = [
	{
		title: "Programming Languages",
		skills: [
			{ name: "C++", icon: SiCplusplus, color: "#00599C" },
			{ name: "Java", icon: DiJava, color: "#007396" },
			{ name: "Python", icon: DiPython, color: "#3776AB" },
			{ name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
			{ name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
		],
	},
	{
		title: "Web Development",
		skills: [
			{ name: "HTML5", icon: SiHtml5, color: "#E34F26" },
			{ name: "CSS3", icon: SiCss3, color: "#1572B6" },
			{ name: "React.js", icon: SiReact, color: "#61DAFB" },
			{ name: "Node.js", icon: SiNodedotjs, color: "#339933" },
		],
	},
	{
		title: "Mobile Development",
		skills: [
			{ name: "Swift", icon: SiSwift, color: "#FA7343" },
			{ name: "Flutter", icon: SiFlutter, color: "#02569B" },
		],
	},
	{
		title: "Databases",
		skills: [
			{ name: "MySQL", icon: SiMysql, color: "#4479A1" },
			{ name: "MongoDB", icon: SiMongodb, color: "#47A248" },
		],
	},
	{
		title: "Cloud Technologies",
		skills: [
			{ name: "AWS", icon: FaAws, color: "#FF9900" },
			{ name: "Google Cloud", icon: DiGoogleCloudPlatform, color: "#4285F4" },
		],
	},
];

export default skillsData;

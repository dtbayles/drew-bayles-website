import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { FaCode, FaFolderOpen, FaRegFileAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
	const skillsRef = useRef(null);
	const portfolioRef = useRef(null);
	const resumeRef = useRef(null);
	const contactRef = useRef(null);

	const handleLinkClick = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			style={{
				position: "fixed",
				left: 0,
				top: 0,
				height: "100%",
				width: "15%",
				backgroundColor: "#2D3035",
				zIndex: 100,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Link
				to="#skills"
				onClick={() => handleLinkClick(skillsRef)}
				style={{
					color: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					margin: "10px"
				}}
			>
				<FaCode size={30} style={{ marginRight: "5px" }} />
				Skills
			</Link>
			<Link
				to="#portfolio"
				onClick={() => handleLinkClick(portfolioRef)}
				style={{
					color: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					margin: "10px"
				}}
			>
				<FaFolderOpen size={30} style={{ marginRight: "5px" }} />
				Portfolio
			</Link>
			<Link
				to="#resume"
				onClick={() => handleLinkClick(resumeRef)}
				style={{
					color: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					margin: "10px"
				}}
			>
				<FaRegFileAlt size={30} style={{ marginRight: "5px" }} />
				Resume
			</Link>
			<Link
				to="#contact"
				onClick={() => handleLinkClick(contactRef)}
				style={{
					color: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					margin: "10px"
				}}
			>
				<FaEnvelope size={30} style={{ marginRight: "5px" }} />
				Contact
			</Link>
		</div>
	);
};

export default Navbar;

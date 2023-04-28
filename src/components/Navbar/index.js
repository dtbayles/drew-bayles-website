import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaFolderOpen, FaRegFileAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
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
				"@media (max-width:600px)": {
					display: "none !important",
				},
			}}
		>
			<Link to="/#skills" style={{ color: "#fff", margin: "10px" }}>
				<FaCode size={20} style={{ marginRight: "5px" }} />
				Skills
			</Link>
			<Link to="#portfolio" style={{ color: "#fff", margin: "10px" }}>
				<FaFolderOpen size={20} style={{ marginRight: "5px" }} />
				Portfolio
			</Link>
			<Link to="/resume" style={{ color: "#fff", margin: "10px" }}>
				<FaRegFileAlt size={20} style={{ marginRight: "5px" }} />
				Resume
			</Link>
			<Link to="/contact" style={{ color: "#fff", margin: "10px" }}>
				<FaEnvelope size={20} style={{ marginRight: "5px" }} />
				Contact
			</Link>
		</div>
	);
};

export default Navbar;

import {Typography} from "@mui/material";
import ParticlesBackground from "../../../components/ParticlesBackground";

const Header = () => {
	return (
		<div style={{ position: "relative" }}>
			<div style={{ position: "absolute", zIndex: "1", height: "100vh", top: 0, bottom: 0, left: 0, right: 0 }}>
				<ParticlesBackground />
			</div>
			<div className="bg-cover bg-center flex flex-col h-screen justify-center items-center" style={{backgroundColor: "#202226"}}>
				<div className="text-center text-white">
					<Typography variant="h1" sx={{ fontWeight: "bold" }}>
						Drew Bayles
					</Typography>
					<Typography variant="h2">Full Stack Developer</Typography>
				</div>
			</div>
		</div>
	);
};

export default Header;

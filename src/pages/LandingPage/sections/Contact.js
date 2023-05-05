import {Grid, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DefaultInfoCard from "components/DefaultInfoCard";
import {useRef} from "react";

const Contact = () => {
	const contactRef = useRef(null);

	return (
		<div id="contact" ref={contactRef}>
			<Grid container item xs={11} spacing={2} sx={{ mx: "auto" }}>
				<Grid item xs={12}>
					<Typography variant="h2" color="white.main">Contact me</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<DefaultInfoCard
								icon={<MailOutlineIcon />}
								title="Email"
								description="Send me an email at dtbayles@gmail.com"
								link="mailto:dtbayles@gmail.com"
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<DefaultInfoCard
								icon={<LinkedInIcon />}
								title="LinkedIn"
								description="Connect with me on LinkedIn"
								link="https://www.linkedin.com/in/drewbayles/"
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<DefaultInfoCard
								icon={<GitHubIcon />}
								title="GitHub"
								description="Check out my projects and contributions on GitHub"
								link="https://github.com/dtbayles"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;

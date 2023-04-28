import {Grid, IconButton, Link, Typography} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Contact = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h2">Contact</Typography>
			</Grid>
			<Grid item xs={12}>
				<Link href="mailto:dtbayles@gmail.com">
					<Typography variant="h6">Email: dtbayles@gmail.com</Typography>
				</Link>
			</Grid>
			<Grid item xs={12}>
				<IconButton
					aria-label="GitHub"
					component={Link}
					href="https://github.com/YOUR_GITHUB_USERNAME"
					target="_blank"
					rel="noopener"
				>
					<GitHub />
				</IconButton>
				<IconButton
					aria-label="LinkedIn"
					component={Link}
					href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
					target="_blank"
					rel="noopener"
				>
					<LinkedIn />
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default Contact;

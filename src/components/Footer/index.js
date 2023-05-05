import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {Box, Typography} from "@mui/material";


const Footer = () => {
	return (
		<Box component="footer" py={6} className="text-white">
			<Container>
				<Grid container>
					<Grid
						item
						xs={12}
						lg={12}
						textAlign={{ xs: "center", lg: "right" }}
						mr="auto"
						mb={{ xs: 3, lg: 0 }}
					>
						<Typography variant="button" opacity={0.8}>
							Copyright © {new Date().getFullYear()} Drew Bayles. All Rights Reserved.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer;

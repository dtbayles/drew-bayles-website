import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import {Box, Typography} from "@mui/material";


const Footer = () => {
	return (
		<Box component="footer" py={6} className="text-white">
			<Container>
				<Grid container>
					<Grid
						item
						xs={12}
						lg={4}
						textAlign={{ xs: "center", lg: "left" }}
						mr="auto"
						mb={{ xs: 3, lg: 0 }}
					>
						<Typography variant="h5" textTransform="uppercase" mb={{ xs: 2, lg: 3 }}>
							Dream Tech LLC
						</Typography>
						<Typography variant="body2" mb={{ xs: 2, lg: 3 }}>
							Based in Provo, UT
						</Typography>
						<Stack
							component="ul"
							direction="row"
							flexWrap="wrap"
							spacing={3}
							justifyContent={{ xs: "center", lg: "flex-start" }}
							pl={0}
							mb={3}
							sx={{ listStyle: "none" }}
						>
							<Box component="li">
								<Typography
									variant="button"
									fontWeight="regular"
									opacity={0.8}
									component={Link}
									to="/"
								>
									Home
								</Typography>
							</Box>
							<Box component="li">
								<Typography
									variant="button"
									fontWeight="regular"
									opacity={0.8}
									component={Link}
									href="/"
									target="_self"
									rel="noreferrer"
								>
									About
								</Typography>
							</Box>
							<Box component="li">
								<Typography
									variant="button"
									fontWeight="regular"
									opacity={0.8}
									component={Link}
									href="/"
									target="_self"
									rel="noreferrer"
								>
									Contact
								</Typography>
							</Box>
						</Stack>
						<Typography variant="button" opacity={0.8}>
							All Rights Reserved. Copyright © {new Date().getFullYear()} Dream
							Tech LLC.
						</Typography>
					</Grid>
					<Grid item xs={12} lg={6} ml="auto" textAlign={{ xs: "center", lg: "right" }}>
						<Typography variant="body1" fontWeight="bold" mb={6} sx={{ fontSize: "1.125rem" }}>
							Empowering your vision with custom software solutions
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer;

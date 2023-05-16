import React, {useRef} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import experiences from "./data/resume";

const Resume = () => {
	const resumeRef = useRef(null);

	return (
		<div id="resume" ref={resumeRef}>
			<Box component="section" pt={6} my={6}>
				<Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
					<Grid item xs={12} lg={8} sx={{ ml: "auto" }}>
						<Grid container spacing={0}>
							<Grid item xs={12} mb={2}>
								<Typography variant="h2" color="white.main">Experience</Typography>
							</Grid>
							{experiences.map((experience, index) => (
								<>
									<Grid item xs={12} key={index}>
										<Typography variant="h5" color="white.main" component="span" sx={{ fontWeight: 'bold' }}>{experience.title} &mdash; {experience.company}</Typography>
									</Grid>
									<Grid item xs={12} mb={2}>
										<Typography variant="h6" color="white.main" component="span" sx={{ fontWeight: 'light' }}>{experience.date} &mdash; {experience.location}</Typography>
									</Grid>
									<Grid item xs={12}>
								{experience.bulletPoints.map((bulletPoint, index) => (
									<Typography variant="h6" color="white.main" fontWeight="regular" key={index} sx={{ display: 'flex', alignItems: 'center' }} mb={index === experience.bulletPoints.length-1 ? 4 : 0}>
										&#x25AA; {bulletPoint}
									</Typography>
									))}
									</Grid>
								</>
								))}
						</Grid>
					</Grid>
					<Grid item xs={12} lg={4} spacing={2}>
						<Box position="sticky" top="25px">
							<Typography variant="h2" color="white.main" mb={2}>Education</Typography>
							<Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between" }}>
								<Typography variant="h5" color="white.main" component="span" sx={{ fontWeight: 'bold' }}>Brigham Young University</Typography>
								<Typography variant="h5" color="white.main" component="span" sx={{ fontWeight: 'bold' }}>April 2023</Typography>
							</Grid>
							<Typography variant="h6" color="white.main" component="span">B.S. Computer Science; Software Engineering</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

export default Resume;
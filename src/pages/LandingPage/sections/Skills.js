import React, {useEffect, useRef, useState} from 'react';
import {Box, Card, CardContent, Grid, Typography} from '@mui/material';
import anime from 'animejs';
import skillsData from './data/skills';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
	const [inView] = useInView({
		threshold: 0,
	});

	const [hasAnimated, setHasAnimated] = useState(false);

	const animateSkills = () => {
		anime.timeline({
			easing: 'easeOutExpo',
			duration: 750,
		}).add({
			targets: '.skill',
			translateX: [-50, 0],
			opacity: [0, 1],
			delay: anime.stagger(100),
		});
		setHasAnimated(true);
	};

	useEffect(() => {
		if (inView && !hasAnimated) {
			animateSkills();
		}
	}, [inView, hasAnimated]);

	const skillsRef = useRef(null);

	return (
		<div id="skills" ref={skillsRef}>
			<Grid id="skills" container xs={11} spacing={3} sx={{ mx: "auto", py: 6 }}>
				<Grid item xs={12} lg={7} spacing={3} sx={{ ml: "auto" }}>
					<Box position="sticky" top="25px" pb={{ xs: 2, lg: 6 }}>
						<Typography variant="h2" color="white.main" mb={3}>
							About me
						</Typography>
						<Typography variant="h5" color="white.main" mb={2}>
							A new grad from Brigham Young University with a B.S. in Computer Science; Software Engineering emphasis (minor in Africana Studies). Graduated in April 2023 and seeking full-time employment.
						</Typography>
						<Typography variant="h5" color="white.main">
							Experience in data engineering and TypeScript. Focused on mobile development: Swift, Flutter, and React. Highly driven to learn new frameworks and programming languages.
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
					<Card
						sx={{
							boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.1)',
							borderRadius: 4
						}}
					>
						<CardContent>
							<Typography variant="h2" sx={{ textAlign: "center" }} mb={1}>
								Skills
							</Typography>
							{skillsData.map((category, index) => (
								<Grid item xs={12} md={12} key={category.title} mb={2}>
									<Typography variant="h5" mb={1}>
										{category.title}
									</Typography>
									<Grid container spacing={3}>
										{category.skills.map((skill) => (
											<Grid item key={skill.name} mb={2}>
												<Typography
													component="span"
													display="flex"
													alignItems="center"
													className="skill"
												>
													<Grid item key={skill.name}>
														<Typography
															variant="h6"
															fontWeight="regular"
															component="span"
															display="flex"
															flexDirection="column"
															alignItems="center"
															className="skill"
															style={{ color: skill.color }}
														>
															{skill.icon && <skill.icon size={40} />}
															{/*<span style={{ color: "#000" }}>{skill.name}</span>*/}
														</Typography>
													</Grid>
												</Typography>
											</Grid>
										))}
									</Grid>
								</Grid>
							))}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default Skills;

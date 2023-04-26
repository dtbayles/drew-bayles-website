import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import anime from 'animejs';
import skillsData from './data/skills';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
	const [ref, inView] = useInView({
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

	const handleSkillHover = (e) => {
		anime({
			targets: e.currentTarget,
			scale: [1, 1.2],
			duration: 200,
			loop: true,
			direction: 'alternate',
		});
	};

	return (
		<Grid container spacing={4} mt={2} ref={ref}>
			<Grid item xs={12}>
				<Typography variant="h2">Skills</Typography>
			</Grid>
			{skillsData.map((category, index) => (
				<Grid item xs={12} md={6} key={category.title}>
					<Typography variant="h5" mb={1} sx={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
						{category.title}
					</Typography>
					<Grid container spacing={2} sx={{ justifyContent: index % 2 === 0 ? 'right' : 'left' }}>
						{category.skills.map((skill) => (
							<Grid item key={skill.name}>
								<Typography
									component="span"
									display="flex"
									alignItems="center"
									className="skill"
								>
									<Grid item key={skill.name}>
										<Typography
											component="span"
											display="flex"
											flexDirection="column"
											alignItems="center"
											className="skill"
											style={{ color: skill.color }}
										>
											{skill.icon && <skill.icon size={32} />}
											<span style={{ color: "#000" }}>{skill.name}</span>
										</Typography>
									</Grid>
								</Typography>
							</Grid>
						))}
					</Grid>
				</Grid>
			))}
		</Grid>
	);
};

export default Skills;

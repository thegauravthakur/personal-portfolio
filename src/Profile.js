import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Styles from '../styles/AnimatedLinks.module.css';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Profile = ({reff}) => {
	const matches = useMediaQuery('(min-width:600px)');
	const useStyle = makeStyles((theme) => ({
		root: {
			marginTop: !matches ? 10 : 0,
			backgroundColor: '#343a40',
			paddingTop: 100,
			paddingBottom: 100,
		},
		mobileImage: {
			marginBottom: !matches ? '50px' : '0px',
			border: '2px solid white',
			borderRadius: '25%',
			maxWidth: '150px',
		},
		title: {
			marginBottom: 12,
			fontSize: 28,
			fontFamily: 'Fredoka One, cursive',
		},
		description: {
			display: 'inline-block',
			color: '#adadad',
			fontFamily: 'Open Sans, serif',
		},
	}));

	const styles = useStyle();

	return (
		<div ref={reff} className={styles.root}>
			<Grid container>
				<Grid item xs={1}/>
				<Grid item container xs={10} justify={'space-between'}>
					<Grid sm={1} item/>
					<Grid sm={2} item>
						<Fade delay={200} triggerOnce direction={'up'}>
							<div hidden={!matches} className={styles.mobileImage}>
								<Image
									style={{border: '5px solid black'}}
									width={1300}
									height={1300}
									src={'/images/profileImage.png'}
									className={styles.mobileImage}
									alt={''}
								/>
							</div>
						</Fade>
					</Grid>
					<Grid sm={1} item/>
					<Grid sm={7} item>
						<Fade triggerOnce direction={'up'} cascade>
							<Typography className={styles.title}>About Me</Typography>
							<div hidden={matches} className={styles.mobileImage}>
								<Image
									layout={'responsive'}
									width={1300}
									height={1300}
									src={'/images/profileImage.png'}
									className={styles.mobileImage}
									alt={''}
								/>
							</div>
						</Fade>
						<Fade delay={300} triggerOnce direction={'up'}>
							<Typography className={styles.description}>
								Hi, my name is Gaurav Thakur. Currently, working as an Associate Software Engineer at MAQ Software. I'm
								a Javascript enthusiast and a full stack developer, more inclined towards the frontend. I'm actively
								looking for an SDE (UI) role. Please find more details <a className={Styles.underline}
								href="https://gauravthakur.in/resume.pdf" target="_blank" rel="noreferrer noopener">here</a>.
							</Typography>
						</Fade>
					</Grid>
					<Grid sm={1} item/>
				</Grid>
				<Grid item xs={1}/>
			</Grid>
		</div>
	);
};

export default Profile;

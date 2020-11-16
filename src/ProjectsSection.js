import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomCard from "./CustomCard";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  wrapper: {
    backgroundColor: "#394867",
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    paddingTop: "20px",
  },
  heading: {
    color: "white",
    fontFamily: "Fredoka One, cursive",
    marginBottom: 25,
  },
}));

const ProjectSection = ({ reff }) => {
  const classes = useStyle();
  return (
    <Grid className={classes.wrapper} ref={reff} container>
      <Grid xs={1} sm={2} item />
      <Grid xs={10} sm={8} item>
        <div className={classes.root}>
          <Typography className={classes.heading} align="center" variant="h4">
            My Projects
          </Typography>

          <Grid
            className={classes.title}
            spacing={2}
            justify={"center"}
            container
          >
            <Grid sm={6} md={4} item>
              <CustomCard
                delay={1}
                width={1897}
                height={990}
                title="CLister (Web App)"
                description={
                  "CLister will make you more organized and productive. You can manage all your related tasks in sections and create different sections for a different type of chores."
                }
                githubURL={"https://github.com/thegauravthakur/clister-reactjs"}
                liveURL={"https://clister.in"}
                footer={["NextJs, ReactJs", "firebase"]}
                image="/images/clister-website.png"
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                delay={2}
                width={1024}
                height={500}
                image="/images/lpu-opt-finder.png"
                githubURL={
                  "https://github.com/thegauravthakur/lpu-OPT-Brute-force-attack"
                }
                title="LPU Opt Finder"
                description={
                  "This was a fun project in which I used the brute-force technique to find the password of OPTs as they LPU used the same passwords repeatedly."
                }
                footer={["Selenium", "Python"]}
              />
            </Grid>

            <Grid sm={6} md={4} item>
              <CustomCard
                delay={3}
                title="CLister (Android App)"
                description={
                  "It is an android application which helps you to connect with the same database used by the web application (CLister.in). It was made so that you can interact with your tasks even on mobile device."
                }
                githubURL={
                  "https://github.com/thegauravthakur/react-native-clister"
                }
                liveURL={"https://bit.ly/clister"}
                footer={["React Native"]}
                image="/images/clister-android-app.png"
                width={1024}
                height={500}
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                delay={4}
                title="Personal Portfolio"
                description={
                  "This is the website which you are visiting right now. It was earlier written in plain html and css but later shifter to ReactJs and Material UI"
                }
                githubURL={
                  "https://github.com/thegauravthakur/personal-portfolio"
                }
                liveURL={"https://gauravthakur.in"}
                footer={["NextJs", "Material UI"]}
                image="/images/portfolio-website.png"
                width={1897}
                height={988}
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                delay={5}
                title="Google Keep Clone"
                description={
                  "A Google Keep Clone, which allows you to perform all the CRUD operations on the notes. the Firebase is used as the backend, so all the data is synced safely."
                }
                footer={["ReactJs", "Firebase"]}
                githubURL={
                  "https://github.com/thegauravthakur/google-keep-clone"
                }
                liveURL={"https://firebase-keep.vercel.app/"}
                image="/images/keep-clone.png"
                width={1920}
                height={988}
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                delay={6}
                title="Movie Ticker Generator"
                description={
                  "In this movie ticker generator, you can book tickets and also review them later. I have used STL for storing. Also, many of C++14 features has been used like range-based for loops and auto keyword."
                }
                githubURL={
                  "https://github.com/thegauravthakur/movieTicketGenerator"
                }
                footer={["C++"]}
                image="/images/movie-ticket-generator.png"
                height={500}
                width={1024}
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid xs={1} sm={2} item />
    </Grid>
  );
};

export default ProjectSection;

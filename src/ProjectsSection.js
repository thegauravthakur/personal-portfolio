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
                title="CLister (Web App)"
                description={
                  "CLister will make you more organized and productive. You can manage all your related tasks in sections and create different sections for a different type of chores."
                }
                githubURL={"https://github.com/thegauravthakur/clister-reactjs"}
                liveURL={"https://clister.in"}
                footer={["NextJs, ReactJs", "firebase"]}
                image="https://res.cloudinary.com/gauravthakur/image/upload/v1605194767/clister-web_uhyvtm.png"
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                image="https://res.cloudinary.com/gauravthakur/image/upload/v1605195398/C-Lister_clean_listing_app_2_1_cvxkh9.png"
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
                title="CLister (Android App)"
                description={
                  "It is an android application which helps you to connect with the same database used by the web application (CLister.in). It was made so that you can interact with your tasks even on mobile device."
                }
                githubURL={
                  "https://github.com/thegauravthakur/react-native-clister"
                }
                liveURL={"https://bit.ly/clister"}
                footer={["React Native"]}
                image="https://res.cloudinary.com/gauravthakur/image/upload/v1605194948/C-Lister_clean_listing_app_1_rnhwqj.png"
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                title="Personal Portfolio"
                description={
                  "This is the website which you are visiting right now. It was earlier written in plain html and css but later shifter to ReactJs and Material UI"
                }
                githubURL={
                  "https://github.com/thegauravthakur/personal-portfolio"
                }
                liveURL={"https://gauravthakur.in"}
                footer={["NextJs", "Material UI"]}
                image="https://res.cloudinary.com/gauravthakur/image/upload/v1605195058/portfolio_dmrj94.png"
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                title="WhatsApp Bot"
                description={
                  "A simple WhatsApp bot which can spam any number with pre programmed messages with the help of the Selenium."
                }
                footer={["Python", "Selenium"]}
                githubURL={
                  "https://github.com/thegauravthakur/scripts/blob/master/whatsappbot.py"
                }
                image="https://res.cloudinary.com/gauravthakur/image/upload/v1605196266/Untitled_design_y848ht.png"
              />
            </Grid>
            <Grid sm={6} md={4} item>
              <CustomCard
                title="Movie Ticker Generator"
                description={
                  "In this movie ticker generator, you can book tickets and also review them later. I have used STL for storing. Also, many of C++14 features has been used like range-based for loops and auto keyword."
                }
                githubURL={
                  "https://github.com/thegauravthakur/movieTicketGenerator"
                }
                footer={["C++"]}
                image="https://res.cloudinary.com/gauravthakur/image/upload/v1605197911/Untitled_design_1_dlx00g.png"
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

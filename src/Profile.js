import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Styles from "../styles/AnimatedLinks.module.css";
import Image from "next/image";

const Profile = ({ reff }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const useStyle = makeStyles((theme) => ({
    root: {
      marginTop: !matches ? 10 : 0,
      backgroundColor: "#343a40",
      paddingTop: 100,
      paddingBottom: 100,
    },
    mobileImage: {
      marginBottom: !matches ? "50px" : "0px",
      border: "2px solid white",
      borderRadius: "25%",
      maxWidth: "150px",
    },
    title: {
      marginBottom: 12,
      fontSize: 28,
      fontFamily: "Fredoka One, cursive",
    },
    description: {
      display: "inline-block",
      color: "#adadad",
      fontFamily: "Open Sans, serif",
    },
  }));

  const styles = useStyle();

  return (
    <div ref={reff} className={styles.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item container xs={10} justify={"space-between"}>
          <Grid sm={1} item />
          <Grid sm={2} item>
            <div hidden={!matches} className={styles.mobileImage}>
              <Image
                style={{ border: "5px solid black" }}
                layout={"responsive"}
                width={1494}
                height={1662}
                src={"/images/profileImage.jpg"}
                className={styles.mobileImage}
                alt={""}
              />
            </div>
          </Grid>
          <Grid sm={1} item />
          <Grid sm={7} item>
            <Typography className={styles.title}>About Me</Typography>
            <div hidden={matches} className={styles.mobileImage}>
              <Image
                layout={"responsive"}
                width={1494}
                height={1662}
                src={"/images/profileImage.jpg"}
                className={styles.mobileImage}
                alt={""}
              />
            </div>
            <Typography className={styles.description}>
              Hi, my name is Gaurav Thakur. Currently, I'm doing my BTech in
              Computer Science from{" "}
              <a className={Styles.underline} href={"https://lpu.in"}>
                Lovely Professional University
              </a>
              . I love doing competitive programming and building new stuff. In
              the past few years, I've spent most of the time exploring
              different sides of programming. I started with competitive
              programming, although I didn't get much success in it. Later, I
              shifted to development. I explored many frameworks like Flutter
              and React Native. Now, I've finally settled for web development
              and I'm loving it. Most of the time, you can see me either
              building something or solving some algorithmic problem.
            </Typography>
          </Grid>
          <Grid sm={1} item />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Profile;

import React from "react";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const useStyle = makeStyles((theme) => ({
  root: {
    border: "1px solid white",
    height: "100%",
    backgroundColor: "white",
    maxWidth: 300,
  },
  gridStyle: {
    height: "100%",
  },
  title: {
    padding: "10px",
    fontSize: "18px",
    fontFamily: "Fredoka One, cursive",
    color: "#394867",
  },
  description: {
    fontFamily: "Open Sans, serif",
    padding: "9px",
    fontSize: "0.9rem",
    color: "black",
  },
  footer: {
    padding: ".75rem 1.25rem",
    backgroundColor: "rgba(0,0,0,.03)",
    borderTop: "1px solid rgba(0,0,0,.125)",
    color: "#404040",

    textAlign: "center",
  },
}));

const CustomCard = ({
  title,
  image,
  description,
  footer,
  githubURL,
  liveURL,
  width,
  height,
  delay,
}) => {
  let text = "";
  for (let i = 0; i < footer.length; i++) {
    if (i !== footer.length - 1) {
      text += footer[i];
      text += ", ";
    } else {
      text += footer[i];
    }
  }
  const classes = useStyle();
  return (
    <Fade
      style={{ height: "100%" }}
      triggerOnce
      direction={"up"}
      delay={delay * 100}
    >
      <Paper className={classes.root}>
        <Grid className={classes.gridStyle} direction="column" container>
          <Grid item>
            <Image width={width} height={height} src={image} alt="CLister" />
          </Grid>
          <Grid item>
            <Typography className={classes.title} align="center">
              {title}
            </Typography>
            <Grid container justify={"space-evenly"}>
              {githubURL ? (
                <Grid item>
                  <IconButton
                    aria-label={"launch the project"}
                    onClick={() => window.open(githubURL, "_blank")}
                    size={"small"}
                  >
                    <GitHubIcon color={"primary"} />
                  </IconButton>
                </Grid>
              ) : null}
              {liveURL ? (
                <Grid item>
                  <IconButton
                    aria-label={"launch the project"}
                    onClick={() => window.open(liveURL, "_blank")}
                    size={"small"}
                  >
                    <LaunchIcon color={"primary"} />
                  </IconButton>
                </Grid>
              ) : null}
            </Grid>
          </Grid>
          <Grid style={{ flex: 1 }} item>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Grid>
          <Grid className={classes.footer} item>
            <Typography style={{ fontSize: 13, fontWeight: "500" }}>
              {text}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  );
};
export default CustomCard;

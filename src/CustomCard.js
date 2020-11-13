import React from "react";
import { Grid, Typography, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import Image from "next/image";
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
    fontFamily: "Open Sans, serif",
    color: "teal",
  },
  description: {
    fontFamily: "Open Sans, serif",
    padding: "10px",
    color: "black",
  },
  footer: {
    padding: ".75rem 1.25rem",
    backgroundColor: "rgba(0,0,0,.03)",
    borderTop: "1px solid rgba(0,0,0,.125)",
    color: "#6c757d!important",
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
    <Paper className={classes.root}>
      <Grid className={classes.gridStyle} direction="column" container>
        <Grid item>
          <Image
            objectFit={"fill"}
            width={width}
            height={height}
            src={image}
            alt="clister"
          />
        </Grid>
        <Grid item>
          <Typography className={classes.title} variant="h5" align="center">
            {title}
          </Typography>
          <Grid container justify={"space-evenly"}>
            {githubURL ? (
              <Grid item>
                <IconButton
                  onClick={() => (window.location.href = githubURL)}
                  size={"small"}
                >
                  <GitHubIcon color={"primary"} />
                </IconButton>
              </Grid>
            ) : null}
            {liveURL ? (
              <Grid item>
                <IconButton
                  onClick={() => (window.location.href = liveURL)}
                  size={"small"}
                >
                  <LaunchIcon color={"primary"} />
                </IconButton>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
        <Grid style={{ flex: 1 }} item>
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
        <Grid className={classes.footer} item>
          <Typography>{text}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CustomCard;

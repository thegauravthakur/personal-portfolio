import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { use100vh } from "react-div-100vh";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import theme from "./theme";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
const TopSection = () => {
  const height = use100vh();
  const matches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    console.log("the height is", height);
  }, [height]);
  return (
    <div id={"back-to-top-anchor"}>
      <Grid
        className={"area"}
        container
        style={{ minHeight: height ? height : "100vh" }}
      >
        <Grid item>
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </Grid>
        <Grid item container style={{ backgroundColor: theme.palette.primary }}>
          <Grid container justify={"center"} item direction={"column"}>
            <Grid item>
              <Grid style={{ marginBottom: 10 }} item>
                <Typography variant={!matches ? "h3" : "h2"}>Hi,</Typography>
              </Grid>
              <Grid style={{ marginBottom: 10 }} item>
                <Typography variant={!matches ? "h3" : "h2"}>
                  I'm Gaurav {matches ? "Thakur" : null}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant={!matches ? "body1" : "h5"}>
                  Nothing much, just a casual learner who loves to code.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginTop: 100 }}>
              <Grid item>
                <Typography
                  style={{ borderBottom: "1px solid white" }}
                  variant={"overline"}
                >
                  Contact Me
                </Typography>
              </Grid>
              <Grid item container>
                <Grid style={{ position: "absolute" }} item>
                  <TwitterIcon
                    onClick={() =>
                      (window.location.href = "https://twitter.com/gauravcodes")
                    }
                    style={{ marginRight: 15, cursor: "pointer" }}
                  />
                  <GitHubIcon
                    onClick={() =>
                      (window.location.href =
                        "https://github.com/thegauravthakur")
                    }
                    style={{ marginRight: 15, cursor: "pointer" }}
                  />
                  <EmailIcon
                    onClick={() =>
                      (window.location.href = "mailto:gthakur581@email.com")
                    }
                    style={{ cursor: "pointer" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopSection;

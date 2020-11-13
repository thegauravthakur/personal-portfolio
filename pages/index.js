import React, { useRef } from "react";
import TopSection from "../src/TopSection";
import Profile from "../src/Profile";
import { Grid } from "@material-ui/core";
import CustomAppBar from "../src/CustomAppBar";
import SkillSection from "../src/SkillSection";
import ProjectSection from "../src/ProjectsSection";
import Footer from "../src/Footer";
import Head from "next/head";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const Index = (props) => {
  const profileRef = useRef();
  const projectRef = useRef();
  const skillRef = useRef();

  return (
    <div>
      <Head>
        <title>Gaurav Thakur</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            "Welcome to Gaurav Thakur's personal space on the Internet. He loves doing competitive programming and building new stuff in his free time."
          }
        />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Gaurav Thakur" key={"ogtitle"} />
        <meta
          property="og:url"
          content="https://gauravthakur.in"
          key={"ogurl"}
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/gauravthakur/image/upload/v1604414321/IMG_20171227_134627_365_bjt5on.jpg"
          key={"ogimage"}
        />
        <meta property="og:type" content="website" key={"ogtype"} />
        <meta
          property="og:description"
          content="Welcome to Gaurav Thakur's personal space on the Internet. He loves doing competitive programming and building new stuff in his free time."
          key={"ogdescription"}
        />
        <meta property="og:locale" content="en_GB" key={"oglocale"} />
      </Head>
      <Grid container>
        <Grid xs item>
          <CustomAppBar
            profileRef={profileRef}
            projectRef={projectRef}
            skillRef={skillRef}
          />
        </Grid>
        <Grid item container>
          <Grid item sm={1} xs={1} />
          <Grid item container xs={10}>
            <TopSection />
          </Grid>

          <Grid item sm={1} xs={0} />
          <Profile reff={profileRef} />
          <SkillSection reff={skillRef} />
          <ProjectSection reff={projectRef} />
          <Footer />
        </Grid>
      </Grid>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Index;

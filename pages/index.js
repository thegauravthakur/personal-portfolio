import React, { useRef } from "react";
import TopSection from "../src/TopSection";
import Profile from "../src/Profile";
import { Grid } from "@material-ui/core";
import CustomAppBar from "../src/CustomAppBar";
import SkillSection from "../src/SkillSection";
import ProjectSection from "../src/ProjectsSection";
import Footer from "../src/Footer";
import Head from "next/head";

const Index = () => {
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
    </div>
  );
};

export default Index;

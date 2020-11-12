import React, { useRef } from "react";
import TopSection from "../src/TopSection";
import Profile from "../src/Profile";
import { Grid } from "@material-ui/core";
import CustomAppBar from "../src/CustomAppBar";
import SkillSection from "../src/SkillSection";
import ProjectSection from "../src/ProjectsSection";
import Footer from "../src/Footer";

const Index = () => {
  const profileRef = useRef();
  const projectRef = useRef();
  const skillRef = useRef();

  return (
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
  );
};

export default Index;

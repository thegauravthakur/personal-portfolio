import React, { useRef } from "react";
import TopSection from "../src/TopSection";
import Profile from "../src/Profile";
import { Grid } from "@material-ui/core";
import CustomAppBar from "../src/CustomAppBar";
import SkillSection from "../src/SkillSection";
import ProjectSection from "../src/ProjectsSection";
import Footer from "../src/Footer";
import ScrollToTop from "../src/ScrollToTop";
import ContactSection from "../src/ContactSection";

const Index = (props) => {
  const profileRef = useRef();
  const projectRef = useRef();
  const skillRef = useRef();

  return (
    <div>
      <Grid container>
        <Grid xs={12} item>
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

          <Grid item sm={1} />
          <Profile reff={profileRef} />
          <SkillSection reff={skillRef} />
          <ProjectSection reff={projectRef} />
          <ContactSection />
          <Footer />
        </Grid>
      </Grid>
      <ScrollToTop props={props} />
    </div>
  );
};

export default Index;

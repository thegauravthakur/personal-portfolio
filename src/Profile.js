import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Gamepad } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Profile = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <Typography
        align={"center"}
        style={{ fontFamily: "Fredoka One, cursive" }}
        variant={"h4"}
      >
        About Me
      </Typography>
      <Grid direction={"row"} container justify={"center"}>
        <Grid item md={2} />
        <Grid container md={8}>
          <Grid style={{ alignItems: "center" }} xs md={5} item>
            <Avatar
              style={{ width: 200, height: 200 }}
              src={"https://gauravthakur.me/images/rounded-profile.png"}
            />
          </Grid>
          <Grid item md={7}>
            <Typography
              align={"center"}
              style={{ fontFamily: "Courier Prime, monospace" }}
            >
              With CLister, you can access your account on any device. For an
              Android device, we have an application. CLister also have a
              progressive web app which you can access on any device and install
              it as a native application
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={2} />
      </Grid>
    </div>
  );
};

export default Profile;

import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";

const Footer = () => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#343a40",
        paddingTop: 25,
      }}
    >
      <Grid container direction={"column"} alignItems={"center"}>
        <Grid item container justify={"center"} style={{}}>
          <div style={{ borderBottom: "1px solid white" }}>
            <TwitterIcon
              color={"secondary"}
              onClick={() =>
                (window.location.href = "https://twitter.com/gauravcodes")
              }
              style={{ marginRight: 15, cursor: "pointer" }}
            />
            <GitHubIcon
              color={"secondary"}
              onClick={() =>
                (window.location.href = "https://github.com/thegauravthakur")
              }
              style={{ marginRight: 15, cursor: "pointer" }}
            />
            <EmailIcon
              color={"secondary"}
              onClick={() =>
                (window.location.href = "mailto:gthakur581@email.com")
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        </Grid>
        <Grid item>
          <Typography
            align="center"
            style={{
              fontSize: "1rem",
              lineHeight: 1.5,
              paddingBottom: "1rem",
              paddingTop: "1rem",
              color: "#adadad",
            }}
          >
            © 2020 Copyright:
            <Link href={"https://gauravthaku.in"} color={"textPrimary"}>
              <b> Gaurav Thakur </b>
            </Link>
            | Made with
            <span style={{ color: "red", fontSize: "22px" }}> ❤ </span> in India
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
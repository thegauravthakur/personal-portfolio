import React from "react";
import { Grid, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
          <div style={{ borderBottom: "1px dotted white", paddingBottom: 7 }}>
            <TwitterIcon
              color={"secondary"}
              onClick={() =>
                window.open("https://twitter.com/gauravcodes", "_blank")
              }
              style={{ marginRight: 15, cursor: "pointer" }}
            />
            <GitHubIcon
              color={"secondary"}
              onClick={() =>
                window.open("https://github.com/thegauravthakur", "_blank")
              }
              style={{ marginRight: 15, cursor: "pointer" }}
            />
            <LinkedInIcon
              style={{ marginRight: 15, cursor: "pointer" }}
              onClick={() =>
                window.open("https://linkedin.com/in/gauravcodes", "_blank")
              }
              color={"secondary"}
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
            <Link
              href={"https://gauravthakur.in"}
              target="_blank"
              rel="noopener noreferrer"
              color={"textPrimary"}
            >
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

import React from "react";
import Box from "@material-ui/core/Box";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import withStyles from "@material-ui/core/styles/withStyles";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {IoLogoFirebase} from 'react-icons/io5';
import {GoFileCode} from 'react-icons/go';
import {MdWeb} from "react-icons/md";
import {DiMongodb, DiJavascript1} from 'react-icons/di';
export default function SkillSection({ reff }) {
  const defaultProps = {
    bgcolor: "#394867",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    style: { width: "100%", maxWidth: 360, margin: "0 auto", marginBottom: 15 },
  };
  const StyledRating = withStyles({
    iconFilled: {
      color: "#ebebeb",
    },
  })(Rating);
  const skills = [
    {
      name: "JavaScript",
      Icon: IoLogoJavascript,
      imageLink: "/icons/JavaScript.png",
      rating: 4.5,
      width: 50,
      height: 50,
    },
    {
      name: "ReactJS",
      Icon: FaReact,
      imageLink: "/icons/JavaScript.png",
      rating: 4,
      width: 50,
      height: 50,
    },
    {
      name: "C++",
      Icon: GoFileCode,
      imageLink: "/icons/JavaScript.png",
      rating: 4,
      width: 50,
      height: 50,
    },
    {
      name: "HTML and CSS",
      Icon: MdWeb,
      imageLink: "/icons/JavaScript.png",
      rating: 3.5,
      width: 50,
      height: 50,
    },
    {
      name: "NodeJS",
      Icon: FaNodeJs,
      imageLink: "/icons/JavaScript.png",
      rating: 3.5,
      width: 50,
      height: 50,
    },
    {
      name: "Firebase",
      Icon: IoLogoFirebase,
      imageLink: "/icons/JavaScript.png",
      rating: 3.5,
      width: 50,
      height: 50,
    },
    {
      name: "MongoDB",
      Icon: DiMongodb,
      imageLink: "/icons/JavaScript.png",
      rating: 3,
      width: 50,
      height: 50,
    },
    {
      name: "NextJS",
      Icon: DiJavascript1,
      imageLink: "/icons/JavaScript.png",
      rating: 2.5,
      width: 50,
      height: 50,
    },
    {
      name: "React Native",
      Icon: FaReact,
      imageLink: "/icons/JavaScript.png",
      rating: 2.5,
      width: 50,
      height: 50,
    },
  ];
  return (
    <Paper
      ref={reff}
      style={{
        backgroundColor: "white",
        width: "100vw",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <Fade triggerOnce direction={"up"}>
        <Typography
          align={"center"}
          variant={"h4"}
          style={{
            color: "#394867",
            fontFamily: "Fredoka One, cursive",
            marginBottom: 25,
          }}
        >
          Skills
        </Typography>
      </Fade>
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          {skills.map((skill, index) => (
            <Grid key={skill.name} xs={12} sm={6} md={4} item>
              <Fade
                delay={index < 3 ? 50 : 500}
                triggerOnce
                direction={"up"}
                cascade
              >
                <Box borderRadius={16} {...defaultProps}>
                  <List dense>
                    <ListItem
                      disableRipple
                      style={{
                        cursor: "default",
                        backgroundColor: "transparent",
                      }}
                      button
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt={skill.name}
                          style={{ backgroundColor: "transparent" }}
                        >
                          {<skill.Icon   color={'white'} />}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={skill.name} />
                      <ListItemSecondaryAction>
                        <StyledRating
                          color={"white"}
                          name="half-rating-read"
                          defaultValue={skill.rating}
                          precision={0.5}
                          readOnly
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Paper>
  );
}

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
import useMediaQuery from "@material-ui/core/useMediaQuery";
import withStyles from "@material-ui/core/styles/withStyles";
import Image from "next/image";
const StyledRating = withStyles({
  iconFilled: {
    color: "#ebebeb",
  },
})(Rating);
export default function SkillSection({ reff }) {
  const defaultProps = {
    bgcolor: "#394867",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    style: { width: "100%", maxWidth: 360, margin: "0 auto", marginBottom: 15 },
  };

  const skills = [
    {
      name: "C++",
      imageLink: "/icons/c++.png",
      rating: 5,
      width: 50,
      height: 50,
    },

    {
      name: "JavaScript",
      imageLink: "/icons/JavaScript.png",
      rating: 4,
      width: 50,
      height: 50,
    },
    {
      name: "C",
      imageLink: "/icons/c.png",
      rating: 5,
      width: 64,
      height: 64,
    },
    {
      name: "HTML",
      imageLink: "/icons/html.png",
      rating: 3.5,
      width: 50,
      height: 50,
    },
    {
      name: "ReactJs",
      imageLink: "/icons/react.png",
      rating: 4,
      width: 100,
      height: 100,
    },
    {
      name: "React Native",
      imageLink: "/icons/react.png",
      rating: 3,
      width: 100,
      height: 100,
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
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          {skills.map((skill) => (
            <Grid xs={12} sm={6} md={4} item>
              <Box borderRadius={16} {...defaultProps}>
                <List dense>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar
                        alt={skill.name}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <Image
                          src={skill.imageLink}
                          height={skill.height}
                          width={skill.width}
                        />
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
            </Grid>
          ))}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Paper>
  );
}

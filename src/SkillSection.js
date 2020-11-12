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
      imageLink:
        "https://res.cloudinary.com/gauravthakur/image/upload/v1605154045/icons8-c_-50_ecidtj.png",
      rating: 5,
    },

    {
      name: "JavaScript",
      imageLink:
        "https://res.cloudinary.com/gauravthakur/image/upload/v1605154992/icons8-javascript-logo-50_b0cpmd.png",
      rating: 4,
    },
    {
      name: "C",
      imageLink:
        "https://res.cloudinary.com/gauravthakur/image/upload/v1605156883/icons8-c-programming-64_gwfvk3.png",
      rating: 5,
    },
    {
      name: "HTML",
      imageLink:
        "https://res.cloudinary.com/gauravthakur/image/upload/v1605154438/icons8-html-5-50_ruya7l.png",
      rating: 3.5,
    },
    {
      name: "ReactJs",
      imageLink:
        "https://res.cloudinary.com/gauravthakur/image/upload/v1605155251/icons8-react-100_2_jknkmk.png",
      rating: 4,
    },
    {
      name: "React Native",
      imageLink:
        "https://res.cloudinary.com/gauravthakur/image/upload/v1605155251/icons8-react-100_2_jknkmk.png",
      rating: 3,
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
                      <Avatar alt={skill.name} src={skill.imageLink} />
                    </ListItemAvatar>
                    <ListItemText primary={skill.name} />
                    <ListItemSecondaryAction>
                      <Rating
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

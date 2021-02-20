import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "./ui/theme";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Typography } from "@material-ui/core";
import Hero from "../img/hero.jpg";
import HeroSm from "../img/herosm.jpg";
import Typical from "react-typical";

const useStyles = makeStyles({
  paper: {
    padding: 0,
    color: theme.palette.primary.main,
    backgroundSize: "100%",
    height: "92vh",
    backgroundImage: `url(${Hero})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${HeroSm})`,
    },
  },
  contactButton: {
    display: "block",
    borderRadius: 0,
    ...theme.tab,
  },
  typography: {
    ...theme.tab,
  },
  typeWritting: {
    ...theme.tab,
    fontSize: "2rem",
    height: "20px",
  },
  gridContainer: {
    height: "100%",
    alignItems: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Paper square classes={{ root: classes.paper }}>
        <Grid
          container
          className={classes.gridContainer}
          justify='space-around'>
          <Grid item>
            <Typography className={classes.typography} variant='h2'>
              مرحباً بك في الأفق للتطوير
            </Typography>
            <Typical
              className={classes.typeWritting}
              loop={Infinity}
              wrapper='p'
              steps={[
                "حيث كل أحلامك تصبح حقيقة...",
                2500,
                "تواصل معنا لا تتردد.",
                2500,
              ]}
            />
            <Button
              variant='contained'
              color='primary'
              className={classes.contactButton}
              size='large'>
              اتصل بنا
            </Button>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Home;

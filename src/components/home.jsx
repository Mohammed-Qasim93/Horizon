import React from "react";
import { makeStyles } from "@material-ui/styles";
import { theme } from "./ui/theme";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    color: theme.palette.primary.main,
    height: "90vh",
  },
  contactButton: {
    display: "block",
    borderRadius: 0,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container justify='space-around' alignItems='center'>
        <Grid item>
          <Typography variant='h1'>مرحبا بك في الافق للتطوير</Typography>
          <Typography variant='p'>
            حيث كل احلامك تصبح حقيقة لا تتردد اتصل بنا
          </Typography>
          <Button
            variant='contained'
            color='primary'
            className={classes.contactButton}>
            اتصل بنا
          </Button>
        </Grid>
        <Grid item>kkm</Grid>
      </Grid>
    </Paper>
  );
};

export default Home;

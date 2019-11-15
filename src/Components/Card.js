import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Present - 2017
        </Typography>
        <Typography className={classes.title} color="" gutterBottom>
        University of Cape Town
        </Typography>
        <Typography variant="h5" component="h2">
        Bachelors of Social Sciences
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Politics and Philosophy
        </Typography>
        <Typography variant="body2" component="p">
        Electives in English Literature studies, Sociology
          <br />
          {'& Anthropology'}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          2016 - 2012
        </Typography>
        <Typography className={classes.title} color="" gutterBottom>
        Oaklands High School
        </Typography>
        <Typography variant="h5" component="h2">
        National Senior Certificate
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Bachelors Pass
        </Typography>
        <Typography variant="body2" component="p">
        Achieved two A’s; Top Student in three subjects (English, History & Life Orientatioon)
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Present
        </Typography>
        <Typography className={classes.title} color="" gutterBottom>
        CoGrammar - HyperionDev
        </Typography>
        <Typography variant="h5" component="h2">
        Full-Stack Web Development
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Full Stack
        </Typography>
        <Typography variant="body2" component="p">
        HTML, CSS, Jquery, Javascript:
          <br />
          {' Node JS, React JS, Express JS'}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      </Grid>

    </div>
  );
}
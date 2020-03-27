import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import picture from "../assets/img/donorspot.jpg";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginBottom: "20px",
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Project_Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Project_Technologies}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="https://github.com/Anierva95/DonorSpot" style={{"textDecoration" : "inherit"}}>
        <Button size="small" color="primary">
            Source Code
        </Button>
        </a>
        <a href="https://mighty-stream-41185.herokuapp.com/" style={{"textDecoration": "inherit"}}>
        <Button size="small" color="primary">
          Deployed Project
        </Button>
        </a>
      </CardActions>
    </Card>
  );
}

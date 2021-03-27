import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    marginTop: 15,
    minWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MatchCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={props.homeImage}
            className={classes.large}
          />
          <Avatar
            alt="Remy Sharp"
            src={props.awayImage}
            className={classes.large}
          />
          <Typography className={classes.pos} color="textSecondary">
            {props.matchTimeStamp}
          </Typography>
          <Typography variant="body2" component="p"></Typography>
          {/* <img src={props.homeImage} /> */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

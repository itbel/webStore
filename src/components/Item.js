import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
    maxHeight: 300,
    minHeight: 300,
    color: "blue",
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: 150,
  },
}));

export default function Item(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Card
      className={classes.root}
      style={isMobile ? { margin: "auto", minWidth: "300px" } : null}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.product.image}
          title={props.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${props.product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

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
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    minWidth: 250,
    maxHeight: 300,
    minHeight: 300,
  },
  media: {
    display: "block",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: 150,
  },
}));

export default function Item(props) {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Card
      className={classes.root}
      style={
        isMobile
          ? { marginBottom: "32px", minWidth: "300px" }
          : { paddingTop: "8px", marginBottom: "32px" }
      }
    >
      <CardActionArea
        onClick={() => {
          history.push(`/product/${props.product.name}`);
        }}
      >
        <CardMedia
          className={classes.media}
          image={props.product.image}
          title={props.product.name}
        />
        <CardContent>
          <Typography variant="h6" component="h2">
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
      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

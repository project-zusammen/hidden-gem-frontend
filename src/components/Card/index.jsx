import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import image from "../../images/raja-ampat.jpeg";
import PropTypes from "prop-types";

export default function ReviewCard({ title, content, vote }) {
  return (
    <Card sx={{ width: 250, height: 380 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} New reviews
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Button
          size="small"
          sx={{
            color: "primary.light",
          }}
        >
          {vote} Upvotes
        </Button>
        <Button size="small" color="secondary" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
  );
}

ReviewCard.defaultProps = {
  title: "Raja Ampat",
  content: "Raja Ampat is a paradise for diving enthusiasts",
  vote: 100,
};

ReviewCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  vote: PropTypes.number,
};

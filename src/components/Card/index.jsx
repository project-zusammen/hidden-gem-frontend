import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import image from "../../images/raja-ampat.jpeg";

// const ExpandMore = styled((props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { expand, other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function ReviewCard() {
  return (
    <Card sx={{ width: 280, height: 380 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography
          data-testid="card-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          Lizard
        </Typography>
        <Typography
          data-testid="card-text"
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
          className="vote"
          data-testid="upvotes"
        >
          10 Upvotes
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          className="view"
          sx={{
            marginRight: "25px",
          }}
          data-testid="detail"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}

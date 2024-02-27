import { Grid } from "@mui/material";
import AddReviewForm from "../../components/AddReviewForm";

function WriteReview() {
  return (
    <Grid data-testid="write-review" container spacing={3} marginTop={5} marginBottom={13}>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
      <Grid item xs={4} md={4} lg={8}>
        <AddReviewForm />
      </Grid>
      <Grid item xs={4} md={4} lg={2}>
      </Grid>
    </Grid>
  );
}

export default WriteReview;
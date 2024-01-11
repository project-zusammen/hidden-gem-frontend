import { Box, Card, CardMedia, Container, Grid, ImageList, ImageListItem, Typography, Chip, IconButton, Paper, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import images from "../data/images";
import chipLists from "../data/chipLists";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ErrorIcon from "@mui/icons-material/Error";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

console.log(images);

const Post = () => {
  return (
    <>
      <Navbar />
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia component="img" height="194" image="/images/hero-image.webp" alt="hero-image" />
      </Card>
      <Container maxWidth={false}>
        <Box sx={{ marginY: 5, display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 700 }}>
            Milano Hotel
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "light" }}>
            Milan
          </Typography>
        </Box>
        <ImageList sx={{ width: "100%", height: 600 }} variant="quilted" cols={4} rowHeight={150}>
          {images.map((image) => (
            <ImageListItem key={image.name} cols={image.cols || 1} rows={image.rows || 1.5}>
              <img {...srcset(image.source, 150, image.rows, image.cols)} alt={image.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography variant="body2" align="justify">
              Nestled amid the bustling cityscape lies Milano Hotel, a true hidden gem that offers an unparalleled retreat. Tucked away from the urban buzz, this haven boasts a serene ambiance that instantly captivates. From the moment you
              step into its welcoming embrace, you re enveloped in a blend of elegance and intimacy. What sets Milano Hotel apart is its understated charm and personalized service. The discreet facade belies the wealth of comfort and
              sophistication within. Each corner reveals meticulous attention to detail, from the thoughtfully designed rooms to the tranquil courtyard, creating an oasis of calm. The true essence of this hidden gem lies in its fusion of
              modern luxury and timeless allure. Beyond its aesthetic appeal, the hotels rich history whispers tales of its legacy, adding depth to every stay. The Milano Hotel is not just a place to rest; it is an experience that lingers
              long after your departure. Its discreet location and understated allure make it a sanctuary for those seeking an exclusive retreat amidst the vibrant heartbeat of the city. For those fortunate enough to discover it, Milano
              Hotel unveils a world where sophistication meets tranquility—a true hidden gem waiting to be cherished. Nestled amid the bustling cityscape lies Milano Hotel, a true hidden gem that offers an unparalleled retreat. Tucked away
              from the urban buzz, this haven boasts a serene ambiance that instantly captivates. From the moment you step into its welcoming embrace, you are enveloped in a blend of elegance and intimacy. What sets Milano Hotel apart is
              its understated charm and personalized service. The discreet facade belies the wealth of comfort and sophistication within. Each corner reveals meticulous attention to detail, from the thoughtfully designed rooms to the
              tranquil courtyard, creating an oasis of calm. The true essence of this hidden gem lies in its fusion of modern luxury and timeless allure. Beyond its aesthetic appeal, the hotel s rich history whispers tales of its legacy,
              adding depth to every stay. The Milano Hotel is not just a place to rest; it is an experience that lingers long after your departure. Its discreet location and understated allure make it a sanctuary for those seeking an
              exclusive retreat amidst the vibrant heartbeat of the city. For those fortunate enough to discover it, Milano Hotel unveils a world where sophistication meets tranquility—a true hidden gem waiting to be cherished. What sets
              Milano Hotel apart is its understated charm and personalized service. The discreet facade belies the wealth of comfort and sophistication within. Each corner reveals meticulous attention to detail, from the thoughtfully
              designed rooms to the tranquil courtyard, creating an oasis of calm. The true essence of this hidden gem lies in its fusion of modern luxury and timeless allure. Beyond its aesthetic appeal, the hotel s rich history whispers
              tales of its legacy, adding depth to every stay. The Milano Hotel is not just a place to rest; it is an experience that lingers long after your departure. Its discreet location and understated allure make it a sanctuary for
              those seeking an exclusive retreat amidst the vibrant heartbeat of the city. For those fortunate enough to discover it, Milano Hotel unveils a world where sophistication meets tranquility—a true hidden gem waiting to be
              cherished.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Stack useFlexGap spacing={2} sx={{ padding: 2, backgroundColor: "#DCE9E1", borderRadius: 1, boxShadow: "none" }}>
              <Typography>Category: Hotel</Typography>
              <Stack direction="row" useFlexGap spacing={1} flexWrap="wrap">
                {chipLists.map((chip) => (
                  <Chip label={chip.label} key={chip.label} sx={{ backgroundColor: "#FFDF82", borderRadius: 2 }} />
                ))}
              </Stack>
              <Paper sx={{ padding: 1, boxShadow: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <IconButton sx={{ color: "green" }}>
                  <ArrowCircleUpIcon />
                </IconButton>
                <Typography variant="body2">10 Upvotes</Typography>
                <IconButton sx={{ color: "red" }}>
                  <ArrowCircleDownIcon />
                </IconButton>
              </Paper>
              <Stack direction="row" spacing={2} sx={{ paddingTop: 5 }}>
                <Stack direction="row" alignItems="center">
                  <IconButton sx={{ color: "black" }}>
                    <BookmarkIcon />
                  </IconButton>
                  <Typography variant="body2">Bookmark</Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <IconButton sx={{ color: "red" }}>
                    <ErrorIcon />
                  </IconButton>
                  <Typography variant="body2">Report</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Post;

import { ImageList, ImageListItem, Box, Card, CardMedia, Container, Grid, Typography, Chip, IconButton, Paper, Stack, TextField, Button, Avatar } from "@mui/material";
import Navbar from "../components/Navbar";
import images from "../data/images";
import chipLists from "../data/chipLists";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ErrorIcon from "@mui/icons-material/Error";
import Upvotes from "../components/Upvotes";

const Post = () => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

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

        <ImageList sx={{ height: 450, borderRadius: 1 }} variant="quilted" cols={4} rowHeight={223}>
          {images.map((item) => (
            <ImageListItem key={item.name} cols={item.cols || 1} rows={item.rows || 1}>
              <img {...srcset(item.source, 223, item.rows, item.cols)} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>

        <Grid container spacing={2}>
          <Grid item md={9}>
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
          <Grid item md={3}>
            <Stack useFlexGap spacing={2} sx={{ padding: 2, backgroundColor: "#DCE9E1", borderRadius: 1, boxShadow: "none" }}>
              <Typography>Category: Hotel</Typography>
              <Stack direction="row" useFlexGap spacing={1} flexWrap="wrap">
                {chipLists.map((chip) => (
                  <Chip label={chip.label} key={chip.id} sx={{ backgroundColor: "#FFDF82", borderRadius: 1 }} />
                ))}
              </Stack>
              <Paper sx={{ padding: 1, boxShadow: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                <Upvotes count={12} />
              </Paper>
              <Stack direction="row" spacing={2} sx={{ paddingTop: { md: 5 } }}>
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
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 5 }}>
          <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 700 }}>
            Comments
          </Typography>
          <TextField id="outlined-basic" label="Write a comment" variant="outlined" multiline rows={3} />
          <Button variant="contained" type="submit" sx={{ width: "10%", alignSelf: "end", backgroundColor: "#0bda73", ":hover": { backgroundColor: "#0ff582" }, boxShadow: "none" }}>
            Submit
          </Button>
        </Box>

        <Box sx={{ border: 1, padding: 2, borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item sm={1} sx={{ display: "flex", alignItems: "start", justifyContent: "center" }}>
              <Avatar />
            </Grid>
            <Grid item sm={11}>
              <Stack spacing={2} sx={{ marginBottom: 3 }}>
                <Typography variant="h6" sx={{ fontSize: 16, fontWeight: 700 }}>
                  Username
                </Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum rem odio illo earum quam provident? Quibusdam itaque ipsam esse sed saepe neque delectus necessitatibus? Neque optio molestiae molestias voluptatem dolor!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, facere. Itaque recusandae voluptate sequi voluptatibus odit! Recusandae reiciendis dolor fugit. Amet ad, excepturi voluptas tempora corrupti ipsa quis illum
                distinctio?
              </Stack>
              <Stack direction="row" spacing={2} sx={{ gap: 1 }}>
                <Stack direction="row" alignItems="center">
                  <IconButton sx={{ color: "red", padding: 1, paddingLeft: 0 }}>
                    <ErrorIcon />
                  </IconButton>
                  <Typography variant="body2">Report</Typography>
                </Stack>
                <Paper sx={{ boxShadow: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Upvotes count={4} />
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Post;

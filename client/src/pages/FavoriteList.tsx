import {
  Typography,
  Container,
  Box,
  Paper,
  Toolbar,
  AppBar,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import type { IState } from "../store";
import Movie from "../components/Movie/Movie";
import type { IMovie } from "../interfaces/Movie";

export default function FavoriteList() {
  const favMovies = useSelector((state: IState) => state.favorites);
  const dispatch = useDispatch();
  const removeFromFavorites = (movie: IMovie) => {
    dispatch({ type: "REMOVE_MOVIE", payload: movie });
  };
  return (
    <Container component="section">
      <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
        <Typography variant="h1" gutterBottom>
          Favorites{" "}
        </Typography>
        <Box component="section">
          <Grid container spacing={2}>
            {favMovies.map((movie) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.title}>
                <Movie
                  cb={() => removeFromFavorites(movie)}
                  movie={movie}
                  icon="REMOVE"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

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
import { useDispatch } from "react-redux";

import type { IMovie } from "../interfaces/Movie.ts";
import Movie from "../components/Movie/Movie.tsx";
import { useSelector } from "react-redux";
import type { IState } from "../store/index.ts";

export default function MovieList() {
  const allMovies = useSelector((state: IState) => state.movies);
  const dispatch = useDispatch();
  const addToFavorites = (movie: IMovie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };
  return (
    <Container component="section">
      <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
        <Typography variant="h1" gutterBottom>
          Movies Selector
        </Typography>
        <Box component="section">
          <Grid container spacing={2}>
            {allMovies.map((movie) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.title}>
                <Movie cb={() => addToFavorites(movie)} movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

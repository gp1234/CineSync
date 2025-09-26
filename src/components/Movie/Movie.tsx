import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import type { IMovie } from "../../interfaces/Movie.ts";
import { Favorite, Delete } from "@mui/icons-material";

type IconEnum = "ADD" | "REMOVE";

export default function Movie({
  movie,
  cb,
  icon = "ADD",
}: {
  movie: IMovie;
  icon?: IconEnum;
  cb: (movie: IMovie) => void;
}) {
  const {
    title,
    year,
    cast,
    genres,
    href,
    extract,
    thumbnail,
    thumbnail_width,
    thumbnail_height,
  } = movie;

  return (
    <Card variant="outlined" sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
          Year: {year}
        </Typography>
        <Typography fontWeight="bold">{title}</Typography>
      </CardContent>
      <CardActions>
        {icon == "ADD" && (
          <IconButton
            sx={{ ml: "auto" }}
            aria-label="add to favorites"
            onClick={() => cb(movie)}
          >
            <Favorite color="success" />
          </IconButton>
        )}
        {icon == "REMOVE" && (
          <IconButton
            sx={{ ml: "auto" }}
            aria-label="add to favorites"
            onClick={() => cb(movie)}
          >
            <Delete color="warning" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import type { IMovie } from "../interfaces/Movie.ts";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Movie({ movie }: { movie: IMovie }) {
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
        <IconButton sx={{ ml: "auto" }} aria-label="add to favorites">
          <FavoriteIcon color="success" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

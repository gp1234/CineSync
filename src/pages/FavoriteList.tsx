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

export default function FavoriteList() {
  return (
    <Container component="section">
      <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
        <Typography variant="h1" gutterBottom>
          Favorites{" "}
        </Typography>
      </Paper>
    </Container>
  );
}

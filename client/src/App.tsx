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
import { useState } from "react";
import MovieList from "./pages/MovieList.tsx";
import FavoriteList from "./pages/FavoriteList.tsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <>{children}</>}
      </div>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="nav" sx={{ flexGrow: 1 }}>
            Movies Selector
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" component="main">
        <Box
          component={"nav"}
          sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Movies" {...a11yProps(0)} />
            <Tab label="Favorites" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <MovieList />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <FavoriteList />
        </CustomTabPanel>
      </Container>
    </Box>
  );
}

export default App;

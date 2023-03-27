import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GamepadIcon from '@mui/icons-material/Gamepad';
import {createTheme,ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Press Start 2P",
      "cursive",
    ].join(','),
  }
});

function ResponsiveAppBar() {
  return (
  <ThemeProvider theme={theme}>
    <AppBar position="static" color ="error">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GamepadIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1,color:"black" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Orbitron",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            The Marveis
          </Typography>

          <GamepadIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1,color:"black" }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            The Marveis
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  </ThemeProvider>
  );
}
export default ResponsiveAppBar;

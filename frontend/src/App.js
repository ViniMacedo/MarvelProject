import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

import ResponsiveAppBar from "./componentes/NavBar";
import BasicTabs from "./componentes/Tab";

//criei um tema geral para mudar a fonte usada no projeto
const theme = createTheme({
  typography: {
    fontFamily: [
      'Orbitron',
      'cursive',
    ].join(','),
  }
});


function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <ResponsiveAppBar/>
          <BasicTabs/>
        </div>
      </ThemeProvider>
  );
}

export default App;

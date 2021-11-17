import {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./component/Header";
import Intro from "./component/Intro";
import Feature from "./component/Feature";

import { ThemeProvider } from "@mui/material/styles";
import { createTheme, useTheme } from "@mui/material/styles";
function App() {
  const [toggleDark, setToggleDark] = useState(false)
  const theme = useTheme();
  const baseTheme = createTheme({
    ...theme,
    palette:{
      mode: toggleDark ? 'dark' : 'light',
      
    },
    breakpoints: {
      values: {
        md: 800,
        sm: 600
      },
    },
  })

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode : 'dark',
    primary: {
      main: '#FFAA4C',

    }
  }
})
  return (
    <Router>
      <ThemeProvider theme={toggleDark ? darkTheme : baseTheme}>
        <div className="App">
          <CssBaseline />
          <Header setToggleDark={setToggleDark} toggleDark={toggleDark}/>
          <Intro />
          <Feature />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;

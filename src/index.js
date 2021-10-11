import React from "react";
import ReactDOM from "react-dom";

import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Home from "./pages/Home";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>,
  document.getElementById("root")
);

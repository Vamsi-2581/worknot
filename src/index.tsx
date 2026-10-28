import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

const theme = createTheme({
  palette: {
    primary: { main: "#1b6ec2", dark: "#165ea8" },
    text: { primary: "#242422", secondary: "#5c5c57" },
    divider: "#e2e2de",
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily:
      '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", sans-serif',
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    // Generator section titles sit under the page's h2
    MuiTypography: { defaultProps: { variantMapping: { subtitle2: "h3" } } },
  },
});

const container = document.getElementById("root")!;
createRoot(container).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

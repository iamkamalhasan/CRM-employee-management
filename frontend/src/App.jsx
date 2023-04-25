import Layout from "./layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

export default App;

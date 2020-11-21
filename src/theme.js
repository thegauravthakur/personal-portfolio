import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#394867",
    },
    secondary: {
      main: "#adadad",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#394867",
    },
  },
});

export default theme;

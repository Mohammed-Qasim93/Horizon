import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  common: {
    light: "#F8FAFF",
    dark: "#282c37",
  },
  palette: {
    primary: {
      main: "#09203f",
    },
    secondary: {
      main: "#f0f5f9",
    },
  },
  tab: {
    fontFamily: "Almarai",
    textTransform: "capitalize",
  },
  buttonContainer: {
    borderRadius: 0,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  logoContainer: {
    paddingRight: "10px",
    height: "65px",
  },
  logo: {
    height: "60px",
    paddingLeft: "5px",
  },
  logoText: {
    fontWeight: 500,
    fontSize: "2rem",
  },
});

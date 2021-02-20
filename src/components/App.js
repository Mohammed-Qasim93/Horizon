import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Services from "./services";
import Contact from "./contact";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./ui/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [value, setValue] = useState(0);
  const changeHandler = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          changeHandler={changeHandler}
          value={value}
          setValue={setValue}
        />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/services'>
            <Services />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

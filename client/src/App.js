import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
// import LoggedOut from './pages/LoggedOut';
import MyTopics from './pages/MyTopics';
import CustomCast from './pages/CustomCast';
import Episode from './pages/Episode';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#22B8D8"
    },
    secondary: {
      main: "#FC9FFC"
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/myTopics">
              <MyTopics />
            </Route>
            <Route path="/customCast">
              <CustomCast />
            </Route>
            <Route path="/episode/:id">
              <Episode />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

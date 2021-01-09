import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import LoggedOut from './pages/LoggedOut';
import TopTrends from './pages/TopTrends';
import MyTopics from './pages/MyTopics';
import CustomCast from './pages/CustomCast'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/topTrends">
            <TopTrends />
          </Route>
          <Route path="/myTopics">
            <MyTopics />
          </Route>
          <Route path="/customCast">
            <CustomCast />
          </Route>
          <Route path="/">
            <LoggedOut />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

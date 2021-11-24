import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import NavBar from "../NavBar/NavBar";
import {
  MainPage,
  SearchPage,
  GenrePage,
  SingleMoviePage,
  TVShowsMainPage,
  SingleTVShowPage,
  Page404
} from "../pages";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route exact path={"/search/:query"}>
            <SearchPage />
          </Route>
          <Route exact path={"/genre/:genreID"}>
            <GenrePage />
          </Route>
          <Route exact path={"/movie/:movieID"}>
            <SingleMoviePage />
          </Route>
          <Route exact path="/tv">
            <TVShowsMainPage/>
          </Route>
          <Route exact path={"/tv/:tvshowID"}>
            <SingleTVShowPage/>
          </Route>
          <Route path="*">
            <Page404/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Switch, Route } from 'react-router';


function App() {
  return <>
    {/* <Home />
    <Rooms />
    <SingleRoom />
    <Error /> */}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/:user" component={User} />
      <Route component={NoMatch} />
    </Switch>

  </>;
}

export default App;

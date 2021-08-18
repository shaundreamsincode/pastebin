import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch, useParams } from "react-router-dom";

import Pastebin from "./Pastebin";
import Document from "./Document";

import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/" exact>
                      <Pastebin/>
                  </Route>

                  <Route path="/documents">
                      <Document/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;

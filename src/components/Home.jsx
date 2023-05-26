import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Length from "./Length";
import Area from "./Area";
import Volume from "./Volume";
import Time from "./Time";
import Speed from "./Speed";
import Temperature from "./Temperature";
import Pressure from "./Pressure";
import Log from "./Log";
import Currency from "./Currency";

export default function Home() {
  return (
    <Router>
    <div>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Switch>
           
            <Route path="/area" component={Area} />
            <Route path="/volume" component={Volume} />
            <Route path="/time" component={Time} />
            <Route path="/speed" component={Speed} />
            <Route path="/temperature" component={Temperature} />
            <Route path="/pressure" component={Pressure} />
            <Route path="/log" component={Log} />
            <Route path="/currency" component={Currency} />
            <Route exact path="/" component={Length} />
            
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

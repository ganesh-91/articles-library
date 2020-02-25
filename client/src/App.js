import React, { useEffect, useState, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styling.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppDashboard from "./component/AppDashboard/AppDashboard";
import Login from "./component/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Suspense fallback={<PageLoader />}> */}
          <Route path="/app" component={AppDashboard} />
          <Route path="/login" component={Login} />
          {/* </Suspense> */}
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;

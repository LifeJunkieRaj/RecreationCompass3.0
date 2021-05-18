import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import BeachesAndParksDetails from "./routes/BeachesAndParksDetails";
import UpdateBeachesAndParksPage from "./routes/UpdateBeachesAndParksPage";
import { BeachesAndParksContextProvider } from './ContextAPI/BeachesAndParksContext';
import LandingPage from './routes/LandingPage';
import Loginpage from './routes/Loginpage';
import Signuppage from './routes/Signuppage';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
          <BeachesAndParksContextProvider>
          <div className="">
              <Router>
                 <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/login" component={Loginpage}/>
                  <Route  exact path="/signup" component={Signuppage}/>
                 <Route exact path="/baps" component={Home}/>
                 <Route exact path="/baps/:id" component={BeachesAndParksDetails}/>
                 <Route exact path="/baps/:id/update" component={UpdateBeachesAndParksPage}/>
                 </Switch>
              </Router>
          </div>
          </BeachesAndParksContextProvider>
      )}
    </>
  );
}

export default App;

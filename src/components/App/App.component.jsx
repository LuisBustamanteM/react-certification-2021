import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import Navbar from "../Navbar/Navbar.component";
import {useFetch} from "../../hooks/hooks";

function App() {

    return (
        <BrowserRouter>
            <Switch>
              <Route path='/' exact render= {routeProps =><HomePage {...routeProps}  key={document.location.href} />} />
              <Route path='/video/:id' exact render= {routeProps =><VideoPage {...routeProps} key={document.location.href} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

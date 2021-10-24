import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import {useFetch} from "../../hooks/hooks";
import NavBar from "../Navbar/Navbar.component";

function App() {
    const defaultValue = "wizeline"
    const {setId, videos} = useFetch("LIST", defaultValue)

    return (
        <BrowserRouter>
            <NavBar setQuery={setId} query={defaultValue} history={useHistory}/>
            <Switch>
                <Route path='/' exact render= {routeProps =><HomePage {...routeProps}  videos={videos} key={document.location.href} />} />
              <Route path='/video/:id' exact render= {routeProps =><VideoPage {...routeProps} key={document.location.href} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

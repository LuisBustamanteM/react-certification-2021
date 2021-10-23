import React, {useRef} from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import {useFetch} from "../../hooks/hooks";
import Navbar from "../Navbar/Navbar.component";

function App() {
    const defaultValue = "wizeline"
    const {setId, videos, id} = useFetch("LIST", defaultValue)

    return (
        <BrowserRouter>
            <Navbar setQuery={setId} query={defaultValue} history={useHistory}/>
            <Switch>
                <Route path='/' exact render= {routeProps =><HomePage {...routeProps}  videos={videos} key={document.location.href} />} />
              <Route path='/video/:id' exact render= {routeProps =><VideoPage {...routeProps} key={document.location.href} />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

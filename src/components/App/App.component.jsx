import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';

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

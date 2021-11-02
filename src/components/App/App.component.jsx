import React, {useContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import FavoritesPage from '../../pages/Favorites';
import {fetchVideos} from "../../utils/utils";
import NavBar from "../Navbar/Navbar.component";
import {StyledApp} from "./styles";
import SideMenuComponent from "../SideMenu";
import LogoutPage from "../../pages/Logout";
import LoginPage from "../../pages/Login";
import AppContext, {StateContext, DispatchContext} from "../../AppContext";


function AppContainer(props) {
    const {videos, query} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    if (videos && videos.length <= 0 && query !== "") {
        fetchVideos(query, "QUERY")
            .then((items) => {
                dispatch({type: "GET_VIDEOS", value: items})
            })
            .catch((e) => {
                console.log("ERROR: ", e)
            });
    }

    return <div>{props.children}</div>
}

function App(props) {

    return (
        <BrowserRouter>
            <AppContext>
                <StyledApp>
                    <AppContainer>
                        <SideMenuComponent/>
                        <NavBar/>
                        <Switch>
                            <Route path='/' exact
                                   render={routeProps => <HomePage {...routeProps} key={document.location.href}/>}/>
                            <Route path='/logout' exact
                                   render={routeProps => <LogoutPage {...routeProps} key={document.location.href}/>}/>
                            <Route path='/login' exact
                                   render={routeProps => <LoginPage {...routeProps} key={document.location.href}/>}/>
                            <Route path='/favorites' exact render={routeProps => <FavoritesPage {...routeProps}
                                                                                                key={document.location.href}/>}/>
                            <Route path='/video/:id' exact
                                   render={routeProps => <VideoPage {...routeProps} key={document.location.href}/>}/>
                        </Switch>
                    </AppContainer>
                </StyledApp>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;

import React, {useContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import FavoritesPage from '../../pages/Favorites';
import {getUrl} from "../../utils/fetchApi";
import NavBar from "../Navbar/Navbar.component";
import {StyledApp} from "./styles";
import fetchApi from "../../utils/fetchApi";
import SideMenuComponent from "../SideMenu";
import LogoutPage from "../../pages/Logout";
import LoginPage from "../../pages/Login";
import AppContext, {StateContext, DispatchContext} from "../../AppContext";

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

function AppContainer(props) {
    const {videos, query} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    if (videos && videos.length <= 0 && query !== "") {
        fetchApi(getUrl(query, "QUERY"))
            .then((data) => {
                dispatch({type: "GET_VIDEOS", value: data.items})
            })
            .catch((e) => {
                console.log("ERROR: ", e)
            });
    }


    return <div>{props.children}</div>
}

export default App;

import React, {createContext, useContext, useReducer} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import FavoritesPage from '../../pages/Favorites';
import {getUrl} from "../../hooks/hooks";
import NavBar from "../Navbar/Navbar.component";
import {StyledApp} from "./styles";
import fetchApi from "../../utils/fetchApi";
import SideMenuComponent from "../SideMenu";
import LogoutPage from "../../pages/Logout";
import LoginPage from "../../pages/Login";

export function appReducer(state, action) {
    switch(action.type){
        case 'TOGGLE_MODE': {
            return {
                ...state,
                darkMode: action.value
            }
        }
        case 'GET_VIDEOS': {
            return {
                ...state,
                videos: action.value
            }
        }
        case 'ADD_FAVORITES': {
            let storedIds = JSON.parse(window.sessionStorage.getItem('favoriteVideos')) || []
            storedIds = [...storedIds, action.value]
            window.sessionStorage.setItem("favoriteVideos", JSON.stringify(storedIds))

            return {
                ...state,
                favoriteIds: [
                    ...state.favoriteIds,
                    action.value
                ]
            }
        }
        case 'REMOVE_FAVORITES': {
            let storedIds = JSON.parse(window.sessionStorage.getItem('favoriteVideos')) || []
            let removedIds = storedIds.filter(id => id !== action.value)
            window.sessionStorage.setItem("favoriteVideos", JSON.stringify(removedIds))

            return {
                ...state,
                favoriteIds: removedIds
            }
        }
        case 'LOGIN': {
            window.sessionStorage.setItem("isLoggedIn", "true")
            window.sessionStorage.setItem("userData", JSON.stringify(action.value))
            return {
                ...state,
                isLoggedIn: true,
                userData: action.value
            }
        }
        case "LOGOUT": {
            window.sessionStorage.removeItem("isLoggedIn")
            window.sessionStorage.removeItem("userData")
            return {
                ...state,
                isLoggedIn: false,
                userData: {}
            }
        }
        default:
            break
    }

    return state
}

export const initialState = {
    darkMode: true,
    query: "Wizeline",
    videos: [],
    favoriteIds: JSON.parse(window.sessionStorage.getItem("favoriteVideos")) || [],
    isLoggedIn: !!window.sessionStorage.getItem("isLoggedIn"),
    userData: JSON.parse(window.sessionStorage.getItem("userData")) || {},
}

export const StateContext = createContext()
export const DispatchContext = createContext()

function App(props) {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
        <BrowserRouter>
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <StyledApp darkMode={state.darkMode}>
                        <AppContainer>
                            <SideMenuComponent/>
                            <NavBar/>
                            <Switch>
                                <Route path='/' exact render= {routeProps =><HomePage {...routeProps}   key={document.location.href} />} />
                                <Route path='/logout' exact render= {routeProps =><LogoutPage {...routeProps}   key={document.location.href} />} />
                                <Route path='/login' exact render= {routeProps =><LoginPage {...routeProps}   key={document.location.href} />} />
                                <Route path='/favorites' exact render= {routeProps =><FavoritesPage {...routeProps}   key={document.location.href} />} />
                                <Route path='/video/:id' exact render= {routeProps =><VideoPage {...routeProps} key={document.location.href} />} />
                            </Switch>
                        </AppContainer>
                    </StyledApp>
                </StateContext.Provider>
            </DispatchContext.Provider>
        </BrowserRouter>
    );
}

function AppContainer(props) {
    const {videos, query} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    if (videos  && videos.length <= 0 && query !== "" ){
        fetchApi(getUrl(query, "LIST"))
            .then( (data) => {
                dispatch({type: "GET_VIDEOS", value: data.items})
            })
            .catch((e) => {
                console.log("ERROR: ", e)
            });
    }


    return <div>{props.children}</div>
}

export default App;

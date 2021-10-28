import React, {createContext, useContext, useReducer} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import {getUrl} from "../../hooks/hooks";
import NavBar from "../Navbar/Navbar.component";
import {StyledApp} from "./styles";
import fetchApi from "../../utils/fetchApi";

function appReducer(state, action) {
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
        default:
            break
    }

    return state
}

const initialState = {
    darkMode: true,
    query: "Wizeline",
    videos: [],
    favoriteVideos: []
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
                            <NavBar/>
                            <Switch>
                                <Route path='/' exact render= {routeProps =><HomePage {...routeProps}   key={document.location.href} />} />
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

    if (videos.length <= 0 && query !== "" ){
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

import React, {createContext, useContext, useReducer} from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import HomePage from '../../pages/Home';
import VideoPage from '../../pages/Video';
import {useFetch} from "../../hooks/hooks";
import NavBar from "../Navbar/Navbar.component";
import {StyledApp} from "./styles";


function appReducer(state, action) {
    switch(action.type){
        case 'TOGGLE_MODE': {
            console.log("TOGGLE MODE: ", state.mode)
            return {
                ...state,
                darkMode: action.value
            }
        }
        default:
            break
    }

    return state
}

const initialState = {
    darkMode: true
}

export const StateContext = React.createContext()
export const DispatchContext = React.createContext()
export const ThemeContext = createContext("light")

function App(props) {

    const  [state, dispatch] = useReducer(appReducer, initialState)

    const defaultValue = "wizeline"
    const {setId, videos} = useFetch("LIST", defaultValue)
    const value = useContext(ThemeContext)


    return (
        <BrowserRouter>
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <StyledApp darkMode={state.darkMode}>
                        <NavBar setQuery={setId} query={defaultValue} history={useHistory}/>
                        <Switch>
                            <Route path='/' exact render= {routeProps =><HomePage {...routeProps}  videos={videos} key={document.location.href} />} />
                            <Route path='/video/:id' exact render= {routeProps =><VideoPage {...routeProps} key={document.location.href} />} />
                        </Switch>
                    </StyledApp>
                </StateContext.Provider>
            </DispatchContext.Provider>
        </BrowserRouter>
    );
}

export default App;

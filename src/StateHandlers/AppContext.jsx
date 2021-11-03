import React, {createContext, useReducer} from 'react'
import {appReducer, initialState, actions} from "./AppReducer";

export const StateContext = createContext()
export const DispatchContext = createContext()


const AppContext = (props) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const dispatchAppReducer = {
            updateQuery: (value) => dispatch({type: actions.updateQuery, value}),
            toggle: (value) => dispatch({type: actions.toggle, value}),
            getVideos: (value) => dispatch({type: actions.getVideos, value}),
            addFavorites: (value) => dispatch({type: actions.addFavorites, value}),
            removeFavorites: (value) => dispatch({type: actions.removeFavorites, value}),
            login: (value) => dispatch({type: actions.login, value}),
            logout: (value) => dispatch({type: actions.logout, value}),
            state
    }

    return (
        <DispatchContext.Provider value={dispatchAppReducer}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>

    )

}

export default AppContext


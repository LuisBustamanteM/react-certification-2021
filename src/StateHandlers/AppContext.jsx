import React, {createContext, useReducer} from 'react'
import {appReducer, initialState} from "./AppReducer";

export const StateContext = createContext()
export const DispatchContext = createContext()

const AppContext = (props) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>

    )

}

export default AppContext


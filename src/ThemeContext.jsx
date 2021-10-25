import {createContext} from 'react'


export const Context = createContext("light")

export default (props) => (
    <Context.Provider value={"light"}>
        {props.children}
    </Context.Provider>
)


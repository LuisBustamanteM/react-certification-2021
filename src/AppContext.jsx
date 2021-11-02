import React, {createContext, useReducer} from 'react'

export function appReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_QUERY': {
            return {
                ...state,
                query: action.value
            }
        }
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


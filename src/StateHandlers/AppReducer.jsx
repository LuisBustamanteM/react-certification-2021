export const actions = {
    updateQuery: "UPDATE_QUERY",
    toggle: "TOGGLE_MODE",
    getVideos: "GET_VIDEOS",
    addFavorites: "ADD_FAVORITES",
    removeFavorites: "REMOVE_FAVORITES",
    login: "LOGIN",
    logout: "LOGOUT"
}

export function appReducer(state, action) {
    switch (action.type) {
        case actions.updateQuery: {
            return {
                ...state,
                query: action.value
            }
        }
        case actions.toggle: {
            return {
                ...state,
                darkMode: action.value
            }
        }
        case actions.getVideos: {
            return {
                ...state,
                videos: action.value
            }
        }
        case actions.addFavorites: {
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
        case actions.removeFavorites: {
            let storedIds = JSON.parse(window.sessionStorage.getItem('favoriteVideos')) || []
            let removedIds = storedIds.filter(id => id !== action.value)
            window.sessionStorage.setItem("favoriteVideos", JSON.stringify(removedIds))

            return {
                ...state,
                favoriteIds: removedIds
            }
        }
        case actions.login: {
            window.sessionStorage.setItem("isLoggedIn", "true")
            window.sessionStorage.setItem("userData", JSON.stringify(action.value))
            return {
                ...state,
                isLoggedIn: true,
                userData: action.value
            }
        }
        case actions.logout: {
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
import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {DispatchContext} from "../../StateHandlers/AppContext";

const LogoutComponent = (props) => {

    const dispatch = useContext(DispatchContext)
    const history = useHistory();

    useEffect(() => {
        dispatch({type: "LOGOUT"})
        history.push('/login')
    }, [])

    return (<></>)
}


export default  LogoutComponent
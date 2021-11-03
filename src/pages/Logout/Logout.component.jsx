import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {DispatchContext} from "../../StateHandlers/AppContext";

const LogoutComponent = (props) => {

    const {logout} = useContext(DispatchContext)
    const history = useHistory();

    useEffect(() => {
        logout()
        history.push('/login')
    }, [])

    return (<></>)
}


export default  LogoutComponent
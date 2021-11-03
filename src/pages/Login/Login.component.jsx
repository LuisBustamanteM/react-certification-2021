import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {DispatchContext, StateContext} from "../../StateHandlers/AppContext";
import {LoginContainer, Title, Form, Input, Button, Line, Error} from "./styles";
import {fetchLogin} from "../../utils/utils";

const LoginComponent = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const {login} = useContext(DispatchContext)
    const {isLoggedIn} = useContext(StateContext)
    const history = useHistory();

    useEffect(() => {
        if(isLoggedIn){
            history.push('/')
        }
    }, [])

    async function postLogin(e){
        e.preventDefault()

        let content = await fetchLogin(username, password)
        if (content.message === "SUCCESS"){
            login(content.userData)
            setError(false)
            history.push('/')
        } else {
            setUsername("")
            setPassword("")
            setError(true)
        }
    }
    return (
        <LoginContainer>
            <Title>Login</Title>
            <Line/>
            <Form onSubmit={postLogin}>
                {error && <Error>Username or Password are incorrect</Error>}
                <label htmlFor={"username"}>Username</label>
                <Input name={"username"} type={"text"} value={username} onChange={({target}) => setUsername(target.value)}/>

                <label htmlFor={"password"}>Password</label>
                <Input name={"password"}  role={"password"} type={"password"} value={password} onChange={({target}) => setPassword(target.value)}/>

                <Button type={"submit"} value={"Login"}/>
            </Form>
        </LoginContainer>
    )
}


export default  LoginComponent
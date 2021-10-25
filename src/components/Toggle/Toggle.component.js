import React, {useContext} from 'react';
import { BsToggle2Off } from 'react-icons/bs';
import {ToggleContainer, Switch, Mode} from './style';
import {ThemeContext} from "../App/App.component";

const ToggleComponent = () => {
    const value = useContext(ThemeContext)

    const toggleMode = () => {
        console.log(value)
    }

    return (
    <ToggleContainer>
        <Switch>
            <input type="checkbox" onChange={() => toggleMode()} />
           <BsToggle2Off/>
        </Switch>
        <article>{value}</article>/
        <Mode>Dark Mode</Mode>
    </ToggleContainer>
  );
};

export default ToggleComponent;

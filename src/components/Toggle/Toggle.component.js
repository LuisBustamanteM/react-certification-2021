import React, {useContext} from 'react';
import {ToggleContainer, Switch, ToggleSwitch, ToggleSlider} from './style';
import {StateContext, DispatchContext} from "../../StateHandlers/AppContext";

const ToggleComponent = () => {
    const {darkMode} = useContext(StateContext)
    const {toggle} = useContext(DispatchContext)

    return (
    <ToggleContainer>
        <ToggleSwitch >
            <input checked={darkMode} type="checkbox" onChange={(e) => toggle(!darkMode)} />
            <ToggleSlider role={"slider"} className={"slider"} onClick={(e) => toggle(!darkMode)}/>
        </ToggleSwitch>
        <Switch htmlFor="toggle-mode">{darkMode ? "Dark" : "Light"} Mode</Switch>
    </ToggleContainer>
  );
};

export default ToggleComponent;

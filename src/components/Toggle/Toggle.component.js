import React, {useContext} from 'react';
import {ToggleContainer, Switch, ToggleSwitch, ToggleSlider} from './style';
import {StateContext, DispatchContext} from "../../StateHandlers/AppContext";

const ToggleComponent = () => {
    const {darkMode} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    return (
    <ToggleContainer>
        <ToggleSwitch >
            <input checked={darkMode} type="checkbox" onChange={(e) => dispatch({type: "TOGGLE_MODE", value: !darkMode})} />
            <ToggleSlider role={"slider"} className={"slider"} onClick={(e) => dispatch({type: "TOGGLE_MODE", value: !darkMode})}/>
        </ToggleSwitch>
        <Switch htmlFor="toggle-mode">{darkMode ? "Dark" : "Light"} Mode</Switch>
    </ToggleContainer>
  );
};

export default ToggleComponent;

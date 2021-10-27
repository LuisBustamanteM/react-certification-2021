import React, {useContext} from 'react';
import { BsToggle2Off } from 'react-icons/bs';
import {ToggleContainer, Switch, Mode, ToggleSwitch, ToggleSlider} from './style';
import {StateContext, DispatchContext} from "../App/App.component";

const ToggleComponent = () => {
    const {darkMode} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    return (
    <ToggleContainer>
        <ToggleSwitch >
            <input checked={darkMode} type="checkbox" onChange={(e) => dispatch({type: "TOGGLE_MODE", value: !darkMode})} />
            <ToggleSlider className={"slider"} onClick={(e) => dispatch({type: "TOGGLE_MODE", value: !darkMode})}/>
        </ToggleSwitch>
        <Switch htmlFor="toggle-mode">{darkMode ? "Dark" : "Light"} Mode</Switch>
    </ToggleContainer>
  );
};

//        <input id={"toggle-mode"} checked={darkMode} type="checkbox" onChange={(e) => dispatch({type: "TOGGLE_MODE", value: !darkMode})} />
// <Mode>{darkMode ? "Dark" : "Light"} Mode</Mode>
// <BsToggle2Off/>
export default ToggleComponent;

import React from 'react';
import styled from 'styled-components';
import { BsToggle2Off } from 'react-icons/bs';
import {ToggleContainer, Switch, Mode} from './style';

const ToggleComponent = () => {
  return (
    <ToggleContainer>
        <Switch>
           <BsToggle2Off/>
        </Switch>
        <Mode>Dark Mode</Mode>
    </ToggleContainer>
  );
};

export default ToggleComponent;

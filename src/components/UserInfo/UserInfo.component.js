import React, {useContext} from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import {UserInfoContainer, UserInfoCircle} from './style';
import {StateContext} from "../App/App.component";

const ToggleComponent = () => {
    const {darkMode} = useContext(StateContext)
  return (
    <UserInfoContainer>
        <UserInfoCircle darkMode={darkMode}>
           <AiOutlineUser/>
        </UserInfoCircle>
    </UserInfoContainer>
  );
};

export default ToggleComponent;
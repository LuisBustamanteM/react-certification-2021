import React, {useContext} from 'react';

import { AiOutlineUser } from 'react-icons/ai';
import {UserInfoContainer, UserInfoCircle, Avatar} from './style';
import {StateContext} from "../../StateHandlers/AppContext";

const ToggleComponent = () => {
    const {darkMode, userData} = useContext(StateContext)
  return (
    <UserInfoContainer>
        <UserInfoCircle darkMode={darkMode}>
            {userData.avatarUrl
                ? <Avatar src={userData.avatarUrl} alt=""/>
                : <AiOutlineUser/>
            }
        </UserInfoCircle>
    </UserInfoContainer>
  );
};

export default ToggleComponent;
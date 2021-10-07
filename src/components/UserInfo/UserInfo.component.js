import React from 'react';
import styled from 'styled-components';

import { AiOutlineUser } from 'react-icons/ai';
import {UserInfoContainer, UserInfoCircle} from './style';

const ToggleComponent = () => {
  return (
    <UserInfoContainer>
        <UserInfoCircle>
           <AiOutlineUser/>
        </UserInfoCircle>
    </UserInfoContainer>
  );
};

export default ToggleComponent;
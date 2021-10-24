import React from 'react';

import ToggleComponent from '../Toggle';
import UserInfoComponent from '../UserInfo';

import {RightNav} from './style';

const RightNavComponent = (props) => {
    return (
        <RightNav>
            <ToggleComponent/>
            <UserInfoComponent/>
        </RightNav>
    )
}

export default RightNavComponent;
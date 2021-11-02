import React from 'react';

import ToggleComponent from '../Toggle';
import UserInfoComponent from '../UserInfo';

import {RightNav} from './style';
import AppContext from "../../AppContext";

const RightNavComponent = (props) => {
    return (
        <AppContext>
            <RightNav>
                <ToggleComponent/>
                <UserInfoComponent/>
            </RightNav>
        </AppContext>
    )
}

export default RightNavComponent;
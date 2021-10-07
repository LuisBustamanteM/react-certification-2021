import React from 'react';
import styled from 'styled-components';

import ToggleComponent from '../Toggle';
import UserInfoComponent from '../UserInfo';

const RightNavComponent = ({className, props}) => {
    return (
        <div className={className}>
            <ToggleComponent/>
            <UserInfoComponent/>
        </div>
    )
}

const StyledRightNav = styled(RightNavComponent)`
    margin: 0;
    color: white;
    display:flex;
    padding: 5px 0;
    float: right;
    @media (max-width: 600px) {
        display: none;
    }

`;

export default StyledRightNav;
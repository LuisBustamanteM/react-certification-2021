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
    flex: 1 1 0px;
    padding: 5px 0;
    float: right;
`;

export default StyledRightNav;
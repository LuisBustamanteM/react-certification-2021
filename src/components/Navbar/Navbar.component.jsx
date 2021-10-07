import React from  'react';
import styled from 'styled-components';

import LeftNavComponent from '../LeftNav';
import RightNavComponent from '../RightNav';

const ToggleModeComponent = ({className, props}) => {
    return(
        <div>
            <input type="checkbox"/>
            <p>Toggle Dark Mode</p>
        </div>
    )
}

const UserInfoComponent = ({className, props}) => {
    return(
        <div>
            <p>User Info</p>
        </div>
    )
}

const NavbarComponent = ({className, props}) => {
    return(
        <div className={className}>
            <LeftNavComponent/>
            <RightNavComponent/>
        </div>
    )
}

const StyledNavbar = styled(NavbarComponent)`
    margin: 0;
    text-align: left;
    color: black;
    display:inline-flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    align-items: center;
    padding: 10px 24px 0 24px;
    background: #1c5476;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.6);
`;

export default StyledNavbar;
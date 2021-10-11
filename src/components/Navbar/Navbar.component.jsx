import React from  'react';

import LeftNavComponent from '../LeftNav';
import RightNavComponent from '../RightNav';

import {NavBar} from './style';

const NavbarComponent = ({className, props}) => {

    return(
        <NavBar>
            <LeftNavComponent/>
            <RightNavComponent/>
        </NavBar>
    )
}

export default NavbarComponent;
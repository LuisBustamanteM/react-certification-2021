import React, {useContext} from  'react';

import LeftNavComponent from '../LeftNav';
import RightNavComponent from '../RightNav';
import {StateContext} from "../../AppContext";

import {NavBar} from './style';

const NavbarComponent = () => {
    const {darkMode} = useContext(StateContext)

    return(
        <NavBar darkMode={darkMode}>
            <LeftNavComponent />
            <RightNavComponent/>
        </NavBar>
    )
}

export default NavbarComponent;
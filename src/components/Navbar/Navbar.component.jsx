import React, {useContext} from  'react';

import LeftNavComponent from '../LeftNav';
import RightNavComponent from '../RightNav';
import {StateContext} from "../App/App.component";

import {NavBar} from './style';

const NavbarComponent = ({query, setQuery}) => {
    const {darkMode} = useContext(StateContext)

    return(
        <NavBar darkMode={darkMode}>
            <LeftNavComponent query={query} setQuery={setQuery} />
            <RightNavComponent/>
        </NavBar>
    )
}

export default NavbarComponent;
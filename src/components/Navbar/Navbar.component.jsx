import React, {useContext} from  'react';

import LeftNavComponent from '../LeftNav';
import RightNavComponent from '../RightNav';

import {NavBar} from './style';

const NavbarComponent = ({query, setQuery}) => {

    return(
        <NavBar>
            <LeftNavComponent query={query} setQuery={setQuery} />
            <RightNavComponent/>
        </NavBar>
    )
}

export default NavbarComponent;
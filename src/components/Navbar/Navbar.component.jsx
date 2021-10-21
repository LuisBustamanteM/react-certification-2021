import React from  'react';

import LeftNavComponent from '../LeftNav';
import RightNavComponent from '../RightNav';

import {NavBar} from './style';

const NavbarComponent = ({query, setQuery, history}) => {


    return(
        <NavBar>
            <LeftNavComponent query={query} setQuery={setQuery} history={history}/>
            <RightNavComponent/>
        </NavBar>
    )
}

export default NavbarComponent;
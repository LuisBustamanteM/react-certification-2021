import React from 'react';

import BurgerMenuComponent from '../BurgerMenu';
import SearchBarComponent from '../SearchBar';

import {LeftNav} from './style';

const LeftNavComponent = () => {
    return (
        <LeftNav>
            <BurgerMenuComponent/>
            <SearchBarComponent/>
        </LeftNav>
    )
}

export default LeftNavComponent;
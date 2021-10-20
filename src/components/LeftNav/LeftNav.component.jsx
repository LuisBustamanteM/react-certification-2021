import React from 'react';

import BurgerMenuComponent from '../BurgerMenu';
import SearchBarComponent from '../SearchBar';

import {LeftNav} from './style';

const LeftNavComponent = ({query, setQuery}) => {
    return (
        <LeftNav>
            <BurgerMenuComponent/>
            <SearchBarComponent query={query} setQuery={setQuery}/>
        </LeftNav>
    )
}

export default LeftNavComponent;
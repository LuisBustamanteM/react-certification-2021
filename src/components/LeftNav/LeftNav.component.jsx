import React from 'react';

import BurgerMenuComponent from '../BurgerMenu';
import SearchBarComponent from '../SearchBar';

import {LeftNav} from './style';

const LeftNavComponent = ({query, setQuery, history}) => {
    return (
        <LeftNav>
            <BurgerMenuComponent/>
            <SearchBarComponent query={query} setQuery={setQuery} history={history}/>
        </LeftNav>
    )
}

export default LeftNavComponent;
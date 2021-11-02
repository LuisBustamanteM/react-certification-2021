import React from 'react';
import SearchBarComponent from '../SearchBar';

import {LeftNav} from './style';
import AppContext from "../../AppContext";

const LeftNavComponent = () => {
    return (
        <AppContext>
            <LeftNav>
                <SearchBarComponent/>
            </LeftNav>
        </AppContext>
    )
}

export default LeftNavComponent;
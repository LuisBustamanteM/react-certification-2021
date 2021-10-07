import React from 'react';
import styled from 'styled-components';

import BurgerMenuComponent from '../BurgerMenu';
import SearchBarComponent from '../SearchBar';

const LeftNavComponent = ({className, props}) => {
    return (
        <div className={className}>
            <BurgerMenuComponent/>
            <SearchBarComponent/>
        </div>
    )
}


const StyledLeftNav = styled(LeftNavComponent)`
    margin: 0;
    color: black;
    padding: 10px 0;
    display:flex;
    flex: 1 1 0px;
`;

export default StyledLeftNav;
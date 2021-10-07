import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {BarsContainer} from './style';



const BurgerMenuComponent = ({className, props}) => {
    return(
        <div className={className}>
            <BarsContainer>
                <FaBars/>
            </BarsContainer>
        </div>
    )
}

const StyledBurgerMenu = styled(BurgerMenuComponent)`
    margin: 0;
    color: black;
    display:flex
`;

export default StyledBurgerMenu;
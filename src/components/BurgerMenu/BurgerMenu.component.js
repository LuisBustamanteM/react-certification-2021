import React from 'react';
import { FaBars } from 'react-icons/fa';
import {BarsContainer, BurgerMenu} from './style';

const BurgerMenuComponent = (props) => {
    return(
        <BurgerMenu>
            <BarsContainer>
                <FaBars/>
            </BarsContainer>
        </BurgerMenu>
    )
}


export default BurgerMenuComponent;
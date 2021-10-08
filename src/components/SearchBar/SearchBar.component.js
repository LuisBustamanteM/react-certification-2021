import React from 'react';
import { FaSearch } from 'react-icons/fa';

import {SearchBarContainer, IconContainer, InputText, SearchBar} from './style';

const SearchBarComponent = ({className, props}) => {
    return(
        <SearchBar>
            <SearchBarContainer>
                <IconContainer>
                    <FaSearch/>
                </IconContainer>
                <InputText type="text" placeholder={"Search..."} value={"Wizeline"} />
            </SearchBarContainer>
        </SearchBar>
    )
}

export default SearchBarComponent;

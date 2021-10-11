import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';

import {SearchBarContainer, IconContainer, InputText, SearchBar} from './style';

const SearchBarComponent = () => {

    const [text, setText]  = useState("Wizeline");

    return(
        <SearchBar>
            <SearchBarContainer>
                <IconContainer>
                    <FaSearch/>
                </IconContainer>
                <InputText type="text" placeholder={"Search..."} value={text} onChange={(e) => setText(e.targetValue)} />
            </SearchBarContainer>
        </SearchBar>
    )
}

export default SearchBarComponent;

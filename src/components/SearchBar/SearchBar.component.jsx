import React, {useState, useEffect} from 'react';
import { FaSearch } from 'react-icons/fa';

import {SearchBarContainer, IconContainer, InputText, SearchBar} from './style';

const SearchBarComponent = ({setQuery, history}) => {

    const [input, setInput] = useState("");

    const getQueryParams = ({key}) => {
        if(input !== "" && key === "Enter"){
            setQuery(input)
            history.push('/')
        }

    }

    return(
        <SearchBar>
            <SearchBarContainer>
                <IconContainer>
                    <FaSearch/>
                </IconContainer>
                <InputText type="text"
                           placeholder={"Search..."}
                           value={input}
                           onChange={({target}) => setInput(target.value)}
                           onKeyPress={(e) => getQueryParams(e)}
                          />
            </SearchBarContainer>
        </SearchBar>
    )
}

export default SearchBarComponent;

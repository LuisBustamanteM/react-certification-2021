import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import {SearchBarContainer, IconContainer, InputText} from './style';


const SearchBarComponent = ({className, props}) => {
    return(
        <div className={className}>
            <SearchBarContainer>
                <IconContainer>
                    <FaSearch/>
                </IconContainer>
                <InputText type="text" placeholder={"Search..."} value={"Wizeline"} />
            </SearchBarContainer>
        </div>
    )
}


const StyledSearchBar = styled(SearchBarComponent)`
    margin: 0;
    color: black;
    display: flex;
    max-height: 100%;
    height: 35px;
`;

export default StyledSearchBar;

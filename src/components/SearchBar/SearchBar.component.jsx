import React, {useContext} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {SearchBarContainer, IconContainer, InputText, SearchBar} from './style';
import {StateContext, DispatchContext} from "../../StateHandlers/AppContext";
import {fetchVideos} from "../../utils/utils";

const SearchBarComponent = (props) => {

    const {query} = useContext(StateContext)
    const {updateQuery, getVideos} = useContext(DispatchContext)

    const history = useHistory();

    const getQueryParams = ({key}) => {
        if(query !== "" && key === "Enter"){
            fetchVideos(query, "QUERY")
                .then( (items) => {
                    getVideos(items)
                })
                .catch((e) => {
                    console.log("ERROR: ", e)
                });

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
                           value={query}
                           onChange={({target}) => updateQuery(target.value)}
                           onKeyPress={(e) => getQueryParams(e)}
                          />
            </SearchBarContainer>
        </SearchBar>
    )
}

export default SearchBarComponent;

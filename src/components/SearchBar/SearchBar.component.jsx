import React, {useContext} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {SearchBarContainer, IconContainer, InputText, SearchBar} from './style';
import {StateContext, DispatchContext} from "../../AppContext";
import {fetchVideos} from "../../utils/utils";

const SearchBarComponent = (props) => {

    const {query} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const history = useHistory();

    const getQueryParams = ({key}) => {
        if(query !== "" && key === "Enter"){
            fetchVideos(query, "QUERY")
                .then( (items) => {
                    console.log(items)
                    dispatch({type: "GET_VIDEOS", value: items})
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
                           onChange={({target}) => dispatch({type: "UPDATE_QUERY", value: target.value})}
                           onKeyPress={(e) => getQueryParams(e)}
                          />
            </SearchBarContainer>
        </SearchBar>
    )
}

export default SearchBarComponent;

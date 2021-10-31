import React, {useContext, useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import {SearchBarContainer, IconContainer, InputText, SearchBar} from './style';
import {StateContext, DispatchContext} from "../../AppContext";
import fetchApi, {getUrl} from "../../utils/fetchApi";

const SearchBarComponent = (props) => {

    const {query} = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const [input, setInput] = useState(query || "");
    const history = useHistory();

    const getQueryParams = ({key}) => {
        if(input !== "" && key === "Enter"){
            dispatch({type: "UPDATE_SEARCH", value: input})

            fetchApi(getUrl(input, "QUERY"))
                .then( (data) => {
                    dispatch({type: "GET_VIDEOS", value: data.items})
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
                           value={input}
                           onChange={({target}) => setInput(target.value)}
                           onKeyPress={(e) => getQueryParams(e)}
                          />
            </SearchBarContainer>
        </SearchBar>
    )
}

export default SearchBarComponent;

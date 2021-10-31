import React, {useContext, useEffect, useState} from 'react'
import CardGridComponent from "../../components/CardGrid";
import {StateContext} from "../../AppContext";
import {fetchVideos} from '../../utils/fetchApi'
import {useHistory} from "react-router-dom";
import {FavoritesContainer} from "./style";

const FavoritesComponent = (props) => {

    const history = useHistory();

    let [favoriteVideos, setFavoriteVideos] = useState([])
    const {isLoggedIn, favoriteIds, darkMode} = useContext(StateContext)

    useEffect(() => {

        if(!isLoggedIn){
            history.push('/login')
        }

        if (favoriteIds && favoriteIds.length > 0) {
            fetchVideos(favoriteIds)
                .then((videos) => {
                    setFavoriteVideos(videos)
                })
        }
    }, [])

    return(
        <FavoritesContainer darkMode={darkMode}>
            <CardGridComponent errorMessage={"You still haven't added favorite videos"} items={favoriteVideos}/>
        </FavoritesContainer>
    )
}

export default FavoritesComponent
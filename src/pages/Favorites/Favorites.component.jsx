import React, {useContext, useEffect, useState} from 'react'
import CardGridComponent from "../../components/CardGrid";
import {StateContext} from "../../StateHandlers/AppContext";
import {fetchVideos} from '../../utils/utils'
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
            fetchVideos(favoriteIds, "ID")
                .then((videos) => {
                    setFavoriteVideos(videos)
                })
        }
    }, [])

    return(
        <FavoritesContainer darkMode={darkMode}>
            <CardGridComponent errorMessage={"You still haven't added favorite videos"} items={favoriteVideos} page={'favorites'}/>
        </FavoritesContainer>
    )
}

export default FavoritesComponent
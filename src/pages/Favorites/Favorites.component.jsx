import React, {useContext, useEffect, useState} from 'react'
import CardGridComponent from "../../components/CardGrid";
import {DispatchContext, StateContext} from "../../components/App/App.component";
import {useFetchId} from "../../hooks/hooks";
import {fetchVideos} from '../../utils/fetchApi'
import {useHistory} from "react-router-dom";

const FavoritesComponent = (props) => {

    const history = useHistory();

    // Request favorite
    let [favoriteVideos, setFavoriteVideos] = useState([])

    const {isLoggedIn, favoriteIds} = useContext(StateContext)

    console.log({favoriteIds})

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
        <div>
            <CardGridComponent errorMessage={"You still haven't added favorite videos"} items={favoriteVideos}/>
        </div>
    )
}

export default FavoritesComponent
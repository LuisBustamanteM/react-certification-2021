import React, {useContext, useEffect, useState} from 'react'
import {FavoriteButton, VideoContainer} from './styles'
import {StateContext, DispatchContext} from "../../StateHandlers/AppContext";

const VideoContentComponent = ({title, description, videoId}) => {
    const {darkMode, favoriteIds, isLoggedIn} = useContext(StateContext)
    const {addFavorites, removeFavorites} = useContext(DispatchContext)
    const [isFavorite, setIsFavorite] = useState(favoriteIds.indexOf(videoId))

    useEffect(() => {
        setIsFavorite(favoriteIds.indexOf(videoId))
    }, [favoriteIds, videoId])

    function handleFavorite(){
        if (isFavorite === -1){
            addFavorites(videoId)
        } else {
            removeFavorites(videoId)
        }
    }

    return(
        <VideoContainer darkMode={darkMode}>
            <iframe id="player"
                    title={"videoplayer"}
                    type="text/html" width="100%" height="500"
                    src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                    frameBorder="0"/>
            <h2>{title}
                {isLoggedIn && <FavoriteButton darkMode={darkMode} onClick={e => handleFavorite()}>{isFavorite === -1 ? "Add to Favorites" : "Remove From Favorites"}</FavoriteButton>}
            </h2>
            <p>{description}</p>
        </VideoContainer>
    )
}

export default  VideoContentComponent
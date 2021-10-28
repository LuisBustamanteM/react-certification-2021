import React, {useContext} from 'react'
import {Thumbnail, VideoList, VideoListContainer} from "./style"
import {StateContext} from "../App/App.component";

const VideoListComponent = ({videos, setId}) => {
    const {darkMode} = useContext(StateContext)

    const updateId = (thumbnailId) => {
        setId(thumbnailId)
    }

    return(
        <VideoListContainer aria-label={"videolist"} title={"videolist"}>
            <VideoList>
                { videos && videos.length > 0 && videos.map((video) => (
                    <Thumbnail key={video.id.videoId} onClick={() => updateId(video.id.videoId)} darkMode={darkMode}>
                        <img src={video.snippet && video.snippet.thumbnails.default.url} alt="thumbnail"/>
                        <p>{video.snippet ? video.snippet.title : "Untitled video"}</p>
                    </Thumbnail>
                ))}
            </VideoList>
        </VideoListContainer>

    )
}

export default  VideoListComponent
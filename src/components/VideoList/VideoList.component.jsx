import React from 'react'
import {Thumbnail, VideoList, VideoListContainer} from "./style"
import {Link } from 'react-router-dom'

const VideoListComponent = ({videos, setId}) => {

    const updateId = (thumbnailId) => {
        setId(thumbnailId)
        console.log({thumbnailId})
    }

    return(
        <VideoListContainer aria-label={"videolist"} title={"videolist"}>
            <VideoList>
                { videos && videos.length > 0 && videos.map((video) => (
                    <Thumbnail key={video.id.videoId} onClick={() => updateId(video.id.videoId)}>
                        <img src={video.snippet && video.snippet.thumbnails.default.url} alt="image thumbnail"/>
                        <p>{video.snippet ? video.snippet.title : "Untitled video"}</p>
                    </Thumbnail>
                ))}
            </VideoList>
        </VideoListContainer>

    )
}

export default  VideoListComponent
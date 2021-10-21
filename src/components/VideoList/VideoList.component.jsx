import React from 'react'
import {VideoPreview, VideoList, VideoListContainer} from "./style"
import {Link } from 'react-router-dom'

const VideoListComponent = ({videos}) => {

    return(
        <VideoListContainer aria-label={"videolist"} title={"videolist"}>
            <VideoList>
                { videos && videos.map((video, idx) => (
                    <VideoPreview key={video.id.videoId}>
                        <Link to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.default.url} alt="image thumbnail"/>
                            <p>
                                {video.snippet.title}
                            </p>
                        </Link>
                    </VideoPreview>
                ))}
            </VideoList>
        </VideoListContainer>

    )
}

export default  VideoListComponent
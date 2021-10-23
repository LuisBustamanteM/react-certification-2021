import React from 'react'
import {VideoContainer} from './styles'

const VideoContentComponent = ({title, description, videoId}) => {
    console.log("RERENDER")
    return(
        <VideoContainer>
            <iframe id="player"
                    title={"videoplayer"}
                    type="text/html" width="100%" height="500"
                    src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                    frameBorder="0"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </VideoContainer>
    )
}

export default  VideoContentComponent
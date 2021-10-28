import React, {useRef, useEffect, useState} from 'react';
import {useFetch} from "../../hooks/hooks";
import {useParams} from "react-router";
import VideoContent from "../../components/VideoContent";
import VideoList from "../../components/VideoList";
import {VideoPageContainer} from './style'

function VideoPage(props) {
    const sectionRef = useRef(null);

    const singleVideo = useFetch("SINGLE")
    const recommendedVideos = useFetch("RECOMMENDED")
    const [videoId] = useState(useParams().id)


    useEffect(() => {
        singleVideo.setId(videoId)
        recommendedVideos.setId(videoId)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId])

    return (
        <section ref={sectionRef}>
            {singleVideo.videos && singleVideo.videos.length > 0
                ?  <VideoPageContainer title={"videoplayer"}>
                    <VideoContent title={singleVideo.videos && singleVideo.videos[0].snippet.title}
                                  description={singleVideo.videos &&  singleVideo.videos[0].snippet.title}
                                  videoId={typeof singleVideo.videos[0].id === "string" ? singleVideo.videos[0].id : singleVideo.videos[0].id.videoId} />
                    <VideoList videos={recommendedVideos.videos} setId={singleVideo.setId}/>
                </VideoPageContainer>
                : <div>Video not found </div>
            }
        </section>
    );
}

export default VideoPage;
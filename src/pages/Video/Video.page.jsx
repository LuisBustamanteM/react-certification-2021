import React, {useRef, useEffect} from 'react';
import Navbar from  '../../components/Navbar';
import {useFetch} from "../../hooks/hooks";
import {useParams} from "react-router";
import VideoContent from "../../components/VideoContent";
import VideoList from "../../components/VideoList";
import {VideoPageContainer} from './style'

function VideoPage(props) {
    const sectionRef = useRef(null);
    // const {setText} = useFetch()
    // const {setId, id, video} = useFetchSingleVideo()
    // const fetchRecommendedVideos = useFetchRecommendedVideos()

    const singleVideo = useFetch("SINGLE")
    //const searchVideos = useFetch("LIST")
    const recommendedVideos = useFetch("RECOMMENDED")
    const videoId = useParams().id

    useEffect(() => {
        console.log("UseEffect: ", videoId)
        console.log(singleVideo.videos)

        singleVideo.setId(videoId)
        recommendedVideos.setId(videoId)
    }, [])

    // <Navbar setQuery={searchVideos.setId}  history={props.history}/>
    return (
        <section ref={sectionRef}>

            {singleVideo.videos && singleVideo.videos.length > 0
                ?  <VideoPageContainer title={"videoplayer"}>
                        <VideoContent title={singleVideo.videos && singleVideo.videos[0].snippet.title}
                                      description={singleVideo.videos &&  singleVideo.videos[0].snippet.title}
                                      videoId={singleVideo.videos[0].id} />
                        <VideoList videos={recommendedVideos.videos} setId={singleVideo.setId}/>
                  </VideoPageContainer>
                : <div>Video not found </div>
            }
        </section>
    );
}

export default VideoPage;
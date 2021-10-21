import React, {useRef, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from  '../../components/Navbar';
import {useFetchSingleVideo, useFetch, useFetchRecommendedVideos} from "../../hooks/hooks";
import {useParams} from "react-router";
import VideoContent from "../../components/VideoContent";
import VideoList from "../../components/VideoList";
import {VideoPageContainer} from './style'
import LeftNavComponent from "../../components/LeftNav";

function VideoPage(props) {
    const sectionRef = useRef(null);
    const {setText} = useFetch()
    const {setId, id, video} = useFetchSingleVideo()
    const fetchRecommendedVideos = useFetchRecommendedVideos()

    const videoId = useParams().id

    useEffect(() => {
        console.log("UseEffect: ", id)

        setId(videoId);
        fetchRecommendedVideos.setId(videoId)

    }, [id])

    return (
        <section className="videopage" ref={sectionRef}>
            <Navbar setQuery={setText}  history={props.history}/>
            {video && video.length > 0
                ?  <VideoPageContainer title={"videoplayer"}>
                        <VideoContent title={video && video[0].snippet.title}
                                      description={video &&  video[0].snippet.title}
                                      videoId={video && video[0].id.videoId} />
                        <VideoList videos={fetchRecommendedVideos.videos}/>
                  </VideoPageContainer>
                : <div>Video not found </div>
            }
        </section>
    );
}

export default withRouter(VideoPage);
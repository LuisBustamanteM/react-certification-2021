import React, {useRef, useEffect, useState, useContext} from 'react';
import {useParams} from "react-router";
import VideoContent from "../../components/VideoContent";
import VideoList from "../../components/VideoList";
import {VideoPageContainer, Container} from './style'
import {StateContext} from "../../AppContext";
import fetchApi, {getUrl} from "../../utils/fetchApi";

function VideoPage(props) {
    const sectionRef = useRef(null);

    const [videoContent, setVideoContent] = useState({id: {}, snippet: {}})
    const [recommendedVideos, setrecommendedVideos] = useState({})

    const [videoId, setVideoId] = useState(useParams().id)
    const {darkMode} = useContext(StateContext)


    useEffect(() => {

        fetchApi(getUrl(videoId, "ID"))
            .then( (data) => {
                 setVideoContent(data.items[0])
            })

        fetchApi(getUrl(videoId, "RECOMMENDED"))
            .then( (data) => {
                setrecommendedVideos(data.items.filter(item => item.snippet))
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId])

    return (
        <Container ref={sectionRef} darkMode={darkMode}>
            {Object.keys(videoContent).length !== 0
                ?  <VideoPageContainer title={"videoplayer"}>
                    <VideoContent title={videoContent.snippet.title}
                                  description={videoContent.snippet.title}
                                  videoId={videoContent && videoContent.id && typeof videoContent.id === "string" ? videoContent.id : videoContent.id.videoId} />
                    <VideoList videos={recommendedVideos} setId={setVideoId}/>
                </VideoPageContainer>
                : <div>Video not found </div>
            }
        </Container>
    );
}

export default VideoPage;
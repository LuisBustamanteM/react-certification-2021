import React, {useRef, useEffect, useState, useContext} from 'react';
import {useParams} from "react-router";
import VideoContent from "../../components/VideoContent";
import VideoList from "../../components/VideoList";
import {VideoPageContainer, Container} from '../Video/style'
import {StateContext} from "../../StateHandlers/AppContext";
import {fetchVideos} from "../../utils/utils";
import {useHistory} from "react-router-dom";

function VideoFavoritesPage(props) {
    const sectionRef = useRef(null);

    const [videoContent, setVideoContent] = useState({id: {}, snippet: {}})
    const [videoId, setVideoId] = useState(useParams().id)
    const history = useHistory();

    let [favoriteVideos, setFavoriteVideos] = useState([])
    const {isLoggedIn, favoriteIds, darkMode} = useContext(StateContext)

    useEffect(() => {

        if(!isLoggedIn){
            history.push('/login')
        }

        if (favoriteIds && favoriteIds.length > 0) {
            fetchVideos(favoriteIds, "ID")
                .then((videos) => {
                    setFavoriteVideos(videos)
                })
        }

        fetchVideos(videoId, "ID")
            .then( (items) => {
                setVideoContent(items[0])
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId])

    function getVideoId(content) {
        return typeof content.id === "string" ? content.id : content.id.videoId
    }

    return (
        <Container ref={sectionRef} darkMode={darkMode}>
            {Object.keys(videoContent).length !== 0
                ?  <VideoPageContainer role={"videoplayer"}>
                    <VideoContent title={videoContent.snippet.title}
                                  description={videoContent.snippet.title}
                                  videoId={videoContent && videoContent.id && getVideoId(videoContent)} />
                    <VideoList videos={favoriteVideos.filter((video) => getVideoId(video) !== videoId)} page={"favorites"}/>
                </VideoPageContainer>
                : <div>Video not found </div>
            }
        </Container>
    );
}

export default VideoFavoritesPage;
import React, {useContext} from 'react';
import {VideoCardContainer, Thumbnail, Title, Paragraph, Content} from './style';
import {Link} from 'react-router-dom'
import {StateContext} from "../../StateHandlers/AppContext";

const VideoCardComponent = ({page, id, item}) => {

    const {darkMode} = useContext(StateContext)

    return (
        <VideoCardContainer darkMode={darkMode}>
            <Link to={`/${page}/${id}`}>
                <Thumbnail defaultImage={item.snippet.thumbnails.default.url}
                           mediumImage={item.snippet.thumbnails.medium.url}
                           highImage={item.snippet.thumbnails.high.url}/>
                <Content>
                    <Title>{item.snippet.title.title}</Title>
                    <Paragraph>{item.snippet.description}</Paragraph>
                </Content>
            </Link>
        </VideoCardContainer>
    )
}

export default VideoCardComponent;
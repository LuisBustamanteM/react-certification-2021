import React, {useContext} from 'react';
import {VideoCardContainer, Thumbnail, Title, Paragraph, Content} from './style';
import {Link} from 'react-router-dom'
import {StateContext} from "../App/App.component";

const VideoCardComponent = (props) => {

    const {darkMode} = useContext(StateContext)

    return (
        <VideoCardContainer darkMode={darkMode}>
            <Link to={`/video/${props.id}`}>
                <Thumbnail defaultImage={props.defaultImage}
                           mediumImage={props.mediumImage}
                           highImage={props.highImage}/>
                <Content>
                    <Title>{props.title}</Title>
                    <Paragraph>{props.description}</Paragraph>
                </Content>
            </Link>
        </VideoCardContainer>
    )
}

export default VideoCardComponent;
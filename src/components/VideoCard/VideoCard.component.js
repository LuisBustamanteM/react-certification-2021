import React from 'react';
import {VideoCardContainer, Thumbnail, Title, Paragraph, Content} from './style';
import {Link} from 'react-router-dom'

const VideoCardComponent = (props) => {
    return (
        <VideoCardContainer>
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
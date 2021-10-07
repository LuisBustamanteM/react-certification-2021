import React from 'react';
import {VideoCardContainer, Thumbnail, Title, Paragraph, Content} from './style';

const VideoCardComponent = (props) => {
    return (
        <VideoCardContainer>
            <Thumbnail defaultImage={props.defaultImage}
                       mediumImage={props.mediumImage}
                       highImage={props.highImage}/>
            <Content>
                <Title>{props.title}</Title>
                <Paragraph>{props.description}</Paragraph>
            </Content>
        </VideoCardContainer>
    )
}

export default VideoCardComponent;
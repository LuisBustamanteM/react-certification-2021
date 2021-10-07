import React from 'react';
import VideoCard from '../VideoCard';

import {CardGrid } from './style';

import data from '../../MockData/videos.json';


let items = data.items;

const VideoCardComponent = () => {
    return (
        <CardGrid>
            { items.map(item => (
                <VideoCard id={item.id.channelId}
                           defaultImage={item.snippet.thumbnails.default.url}
                           mediumImage={item.snippet.thumbnails.medium.url}
                           highImage={item.snippet.thumbnails.high.url}
                           title={item.snippet.title}
                           description={item.snippet.description}/>
            ))}
        </CardGrid>
    )
}

export default VideoCardComponent;
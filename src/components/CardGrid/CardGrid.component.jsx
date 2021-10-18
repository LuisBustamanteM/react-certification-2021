import React, {useState, useEffect} from 'react';
import VideoCard from '../VideoCard';
import {CardGrid, ErrorMessage } from './style';

const CardGridComponent = ({items = []}) => {

    return(
        <CardGrid>
            { items.length > 0 ? items.map( (item, idx) => (
                    <VideoCard key={idx}
                               id={item.id.channelId}
                               defaultImage={item.snippet.thumbnails.default.url}
                               mediumImage={item.snippet.thumbnails.medium.url}
                               highImage={item.snippet.thumbnails.high.url}
                               title={item.snippet.title}
                               description={item.snippet.description}/>
                ))
                : <ErrorMessage>No videos to display, Try Reloading.</ErrorMessage>
            }
        </CardGrid>
    )
}

export default CardGridComponent;
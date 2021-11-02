import React from 'react';
import VideoCard from '../VideoCard';
import {CardGrid, ErrorMessage } from './style';

const CardGridComponent = ({items = [], errorMessage, page= 'video'}) => {

    return(
        <CardGrid>
            { items.length > 0 ? items.map( (item) => (
                    <VideoCard key={item.id.videoId ? item.id.videoId : item.id}
                               id={item.id.videoId ? item.id.videoId : item.id}
                               defaultImage={item.snippet.thumbnails.default.url}
                               mediumImage={item.snippet.thumbnails.medium.url}
                               highImage={item.snippet.thumbnails.high.url}
                               title={item.snippet.title}
                               description={item.snippet.description}
                               page={page}/>
                ))
                : <ErrorMessage>{errorMessage}</ErrorMessage>
            }
        </CardGrid>
    )
}

export default CardGridComponent;
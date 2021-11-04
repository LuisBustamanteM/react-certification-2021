import React from 'react';
import VideoCard from '../VideoCard';
import {CardGrid, ErrorMessage } from './style';

const CardGridComponent = ({items = [], errorMessage, page= 'video'}) => {

    return(
        <CardGrid>
            { items.length > 0 ? items.map( (item) => (
                    <VideoCard key={item.id.videoId ? item.id.videoId : item.id}
                               id={item.id.videoId ? item.id.videoId : item.id}
                               item={item}
                               page={page}/>
                ))
                : <ErrorMessage>{errorMessage}</ErrorMessage>
            }
        </CardGrid>
    )
}

export default CardGridComponent;
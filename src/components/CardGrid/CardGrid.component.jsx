import React, {Component, useState, useEffect} from 'react';
import VideoCard from '../VideoCard';
import {CardGrid } from './style';

// import data from '../../MockData/videos.json'; // - For mock data
import fetchApi from "../../utils/fetchApi";

const VideoCardComponent = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchApi("http://localhost:8000/videos")
            .then(data => setItems(data.items));
    });

    return(
        <CardGrid>
            { items && items.map( (item, idx) => (
                    <VideoCard key={idx}
                               id={item.id.channelId}
                               defaultImage={item.snippet.thumbnails.default.url}
                               mediumImage={item.snippet.thumbnails.medium.url}
                               highImage={item.snippet.thumbnails.high.url}
                               title={item.snippet.title}
                               description={item.snippet.description}/>
                )
            )}
        </CardGrid>
    )
}

export default VideoCardComponent;
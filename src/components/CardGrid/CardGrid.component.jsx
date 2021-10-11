import React, {useState, useEffect} from 'react';
import VideoCard from '../VideoCard';
import {CardGrid, ErrorMessage } from './style';

// import data from '../../MockData/videos.json'; // - For mock data
import fetchApi from "../../utils/fetchApi";

const CardGridComponent = ({url = "http://localhost:8080/videos"}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchApi(url)
            .then((data) => setItems(data.items))
            .catch(() => setItems([]));

    }, []);

    return(
        <CardGrid>
            { items.length ? items.map( (item, idx) => (
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
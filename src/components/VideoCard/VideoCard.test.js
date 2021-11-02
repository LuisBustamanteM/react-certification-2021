import React from 'react';
import {render} from "@testing-library/react";
import VideoCard from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from "../../AppContext";
import mockData from '../../MockData/youtubeResult.json'

test("<VideoCard/> matches snapshot", () => {
    let video = mockData.items[0]
    let images = video.snippet.thumbnails

    const component = render(
        <AppContext>
            <Router>
                <VideoCard
                    defaultImage={images.default.url}
                    mediumImage={images.default.medium}
                    highImage={images.default.high}
                    title={video.snippet.title}
                    description={video.snippet.description}/>
            </Router>
        </AppContext>
    );

    expect (component.container).toMatchSnapshot();
});

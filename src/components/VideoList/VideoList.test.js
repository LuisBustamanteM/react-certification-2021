import React from 'react';
import VideoList from './index';
import {render } from "@testing-library/react";
import mockData from "../../MockData/youtubeResult.json";
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from "../../StateHandlers/AppContext";

const mockApi = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
        Promise.resolve({json: () => Promise.resolve(mockData)})
    )
const items = mockData.items

describe("Testing <VideoList/>", () => {

    it("Displays a list of thumbnails items on <VideoList/>",  () => {

        const component = render (
            <AppContext>
                <Router>
                    <VideoList videos={items}/>
                </Router>
            </AppContext>
        );

        const videoCards = component.getAllByRole("listitem")
        expect(videoCards).toHaveLength(items.length)
    });
});

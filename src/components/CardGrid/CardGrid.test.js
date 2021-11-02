import React from 'react';

import CardGrid from './index';
import {render, getByRole } from "@testing-library/react";
import mockData from "../../MockData/youtubeResult.json";
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from "../../AppContext";

describe("Testing <CardGrid/>", () => {

    const errorMessage = "No videos to display, try again"

    it("Displays a list of videoCard items on <CardGrid/>",  () => {
        let items = mockData.items

        const component = render (
            <AppContext>
                <Router>
                    <CardGrid items={items} errorMessage={errorMessage}/>
                </Router>
            </AppContext>
            );

        const videoCards = component.getAllByRole("listitem")
        expect(videoCards).toHaveLength(items.length)
    });

    it("Displays error message when no items have been passed on <CardGrid/>",  () => {

        const {container} = render (
            <Router>
                <CardGrid errorMessage={errorMessage}/>
            </Router>
        );

        const error = getByRole(container,"heading", {level: 3})
        expect(error).toHaveTextContent(errorMessage)
    });

});
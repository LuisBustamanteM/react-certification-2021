import React from 'react';

import CardGrid from './index';
import {render, getAllByRole, getByRole } from "@testing-library/react";
import mockData from "../../MockData/youtubeResult.json";
import { BrowserRouter as Router } from 'react-router-dom';

describe("Testing <CardGrid/>", () => {

    test("displays a list of videoCard items on <CardGrid/>",  () => {
        let items = mockData.items

        // check how to make a single route build function
        const component = render (
            <Router>
                <CardGrid items={items}/>
            </Router>
            );

        const videoCards = component.getAllByRole("listitem")
        expect(videoCards).toHaveLength(items.length)
    });

    test("Displays error message when no items have been passed on <CardGrid/>",  () => {
        const component = render (
            <Router>
                <CardGrid />
            </Router>
        );

        const errorMessage = component.getByRole("heading", {level: 3})
        expect(errorMessage).toHaveTextContent("No videos to display, Try Reloading.")
    });

});
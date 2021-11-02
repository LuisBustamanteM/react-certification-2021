import React from 'react';

import HomePage from './index';
import {render, getByRole} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import AppContext from "../../AppContext";

describe("Testing <HomePage/>", () => {
    it("Renders all child components inside <HomePage/>", () => {
        const {container} = render (
            <AppContext>
                <Router>
                    <HomePage/>
                </Router>
            </AppContext>
        );

        const title = () => getByRole(container, "heading", {level:1})
        const cardGrid = () => getByRole(container, "list")

        expect(title())
        expect(cardGrid())

    })
});
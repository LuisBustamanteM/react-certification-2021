import React from 'react';
import Favorites from './index';
import {render, getByRole} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import AppContext from "../../AppContext";

const build = () => {

    const {container, debug} = render (
        <AppContext>
            <Router>
                <Favorites />
            </Router>
        </AppContext>
    );

    return {
        container,
        debug,
        cardGrid: () => getByRole(container, "list"),
        errorMessage: () => getByRole(container, "heading")
    }
}
describe("Testing <Favorites/>", () => {

    it("Displays a <CardGrid/>",() => {
        expect(build().cardGrid())
    })

    it("Displays an error message when no id's have been passed", () => {
        expect(build().errorMessage())
    })

});
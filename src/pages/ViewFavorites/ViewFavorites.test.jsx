import React from 'react'
import { render, getByRole } from "@testing-library/react"
import ViewFavorites from './index'
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from "../../StateHandlers/AppContext";

describe("Testing <ViewFavorites/>", () => {
    it("Renders all child components inside <ViewFavorites/>", () => {
        const {container} = render (
            <AppContext>
                <Router>
                    <ViewFavorites/>
                </Router>
            </AppContext>
        );

        const videoPlayer = () =>  getByRole(container, "videoplayer")
        const videoList = () =>  getByRole(container, "list")

        expect(videoPlayer())
        expect(videoList())
    })


})
import React from 'react'
import { render, getByRole } from "@testing-library/react"
import VideoPage from './index'
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from "../../AppContext";

describe("Testing <VideoPage/>", () => {
    it("Renders all child components inside <VideoPage/>", () => {
        const {container} = render (
            <AppContext>
                <Router>
                    <VideoPage/>
                </Router>
            </AppContext>
        );

        const videoPlayer = () =>  getByRole(container, "videoplayer")
        const videoList = () =>  getByRole(container, "list")

        expect(videoPlayer())
        expect(videoList())
    })


})
import React from 'react'
import { render } from "@testing-library/react"
import VideoPage from './index'
import { BrowserRouter as Router } from 'react-router-dom';

describe("Testing <VideoPage/>", () => {
    it("Compares with a snapshot of <VideoPage/>", () => {
        const component = render (
            <Router>
                <VideoPage/>
            </Router>
        );

        expect(component).toMatchSnapshot()
    })


})
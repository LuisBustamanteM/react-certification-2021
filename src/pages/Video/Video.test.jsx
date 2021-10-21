import React from 'react'
import VideoPage from './index'
import { render, getByRole, getByTitle } from "@testing-library/react"

const build = () => {
    const {container, debug} = render(<VideoPage/>)

    return {
        searchbar: () => getByRole(container, "textbox"),
        videoPlayer: () => getByTitle(container, "videoplayer"),
        videoList: () => getByRole(container, "list")
    }
}

describe("Testing <VideoPage/>", () => {

    it("Checks al child components are loaded", () => {
        const {searchBar, videoPlayer, videoList} = build()
    })

    it("Requests data from id", () => {
        // RETURNS A single element
    })
})
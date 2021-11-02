import React from 'react'
import VideoContent from "./VideoContent.component";
import { render, getByTitle, getByText } from "@testing-library/react"
import AppContext from "../../AppContext";
import mockData from '../../MockData/youtubeResult.json'

let video = mockData.items[0]
const content = {
    title: video.snippet.title,
    description: video.snippet.description,
    videoId: video.id.videoId
}

const build = () => {
    const {container, debug} = render(
        <AppContext>
            <VideoContent title={content.title}
                          description={content.description}
                          videoId={content.videoId}/>
        </AppContext>
    )

    return {
        container,
        debug,
        videoPlayer: () =>  getByTitle(container, "videoplayer"),
        title: (text) => getByText(container, text),
        description: (text) => getByText(container, text)
    }
}

describe("Testing Video Content", () =>{
    it("Shows video data and iframe with videoId on page", () => {
        const {videoPlayer, title, description} = build()

        expect(videoPlayer().src).toBe(`http://www.youtube.com/embed/${content.videoId}?enablejsapi=1`)
        expect(title(content.title)).toHaveTextContent(content.title)
        expect(description(content.description)).toHaveTextContent(content.description)

    })
})
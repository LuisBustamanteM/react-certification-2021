import React from 'react'
import VideoContent from "./VideoContent.component";
import { render, getByTitle, getByText } from "@testing-library/react"

const content = {
    title: "To All Other Smash Mains...",
    description: "Just a joke... please don't sweat all over me. \\n#Sora #Smash #SorainSmash #Smashbros #SorasHere #SorasFinallyHere",
    videoId: "75JOrSEy0fc"
}

const build = () => {
    const {container, debug} = render(<VideoContent title={content.title} description={content.description} videoId={content.videoId}/>)

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
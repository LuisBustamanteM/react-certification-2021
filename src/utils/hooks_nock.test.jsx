import React from 'react'
import { act } from '@testing-library/react'
import nock from 'nock'
import mockData from '../MockData/youtubeResult.json'
import {fetchVideos, getUrl} from "./utils"
const sampleIds = ["a1", "Smash bros", "ac3"]
const mockYoutubeApi =  () => {

    const scope = nock(getUrl(sampleIds, "ID"))
        .get('/')
        .reply(200, mockData.items)
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true'
        })

    nock.disableNetConnect()
    return scope;
}


describe("Testing utils with nock", ()  => {

    it.skip("Returns a list of videos when calling fetchVideos() using Nock",  async () => {
        await act(async () => {
            let videos = await fetchVideos(sampleIds, "ID")
           expect(videos).toHaveLength(mockData.items.length)
        })

        //expect(mockYoutubeApi()).toHaveBeenCalledWith(getUrl(sampleIds, "ID"))
    })
})
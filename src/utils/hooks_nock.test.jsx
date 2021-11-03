import React from 'react'
import { act } from '@testing-library/react'
import nock from 'nock'
import mockData from '../MockData/youtubeResult.json'
import {fetchVideos, getUrl} from "./utils"
import config from "../config.json";
const env = config.currentEnv
const {baseUrl, key} = config.environments[env]

const mockYoutubeApi =  () => {

    const scope = nock(baseUrl)
        .get('/videos/videos')
        .query({
            part: "snippet",
            id:123,
            key:key
        })
        .reply(200, { items: mockData.items })
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true'
        })

    nock.disableNetConnect()
    return scope;
}


describe("Testing utils with nock", ()  => {

    it.skip("Returns a list of videos when calling fetchVideos() using Nock",  async () => {

        mockYoutubeApi()

        await act(async () => {
            let videos = await fetchVideos("123", "ID")
            expect(videos).toHaveBeenCalledWith(getUrl("123", "ID"))
           // expect(videos).toHaveLength(mockData.items.length)
        })

    })
})
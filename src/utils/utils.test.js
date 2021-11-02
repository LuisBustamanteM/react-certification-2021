import React from 'react';
import {fetchLogin, fetchVideos, getUrl} from './utils';
import config from '../config.json'
import {act} from "@testing-library/react";
import mockData from "../MockData/youtubeResult.json";

const env = config.currentEnv
const {baseUrl, key} = config.environments[env]

const fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(mockData) })
    )

describe("Testing utils functions", () => {
    const sampleIds = ["a1", "Smash bros", "ac3"]

    it("Returns expected urls with getUrl()", () => {

        const singleIdURL = getUrl(sampleIds[0], "ID")
        expect(singleIdURL).toBe(`${baseUrl}/videos?part=snippet&id=${sampleIds[0]}&key=${key}`)

        const recommendedIdURL = getUrl(sampleIds[0], "RECOMMENDED")
        expect(recommendedIdURL).toBe(`${baseUrl}/search?part=snippet&relatedToVideoId=a1&type=video&key=${key}&maxResults=20`)

        const queryIdURL = getUrl(sampleIds[1], "QUERY")
        expect(queryIdURL).toBe(`${baseUrl}/search?part=snippet&q=Smash%20bros&type=video&key=${key}&maxResults=20`)
    });

    it("Returns a list of videos when calling fetchVideos()", async function(){

        await act(async () => {
            let videos = await fetchVideos(sampleIds, "ID")
            expect(videos).toHaveLength(mockData.items.length)
        })

        expect(fetchMock).toHaveBeenCalledWith(getUrl(sampleIds, "ID"))
    })

});
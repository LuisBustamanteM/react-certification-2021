import React from 'react'
import { waitFor } from '@testing-library/react'
import {renderHook, act } from '@testing-library/react-hooks'

import {useFetch} from "./hooks";
import mockData from '../MockData/youtubeResult.json'
import config from "../../config.json";
let env = config.currentEnv;
let {baseUrl, part, keys, maxResults} = config.environments[env].api

// Mocking fetch manually
// const unmockedFetch = global.fetch
//
// beforeAll(() => {
//     global.fetch = () =>
//         Promise.resolve({
//             json: () => Promise.resolve(mockData)
//         })
// })
//
// afterAll(() => {
//     global.fetch = unmockedFetch
// })
// // #####

const mockApi = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
        Promise.resolve({json: () => Promise.resolve(mockData)})
    )

describe("Testing Custom Hooks mocking fetch", () => {


    it("Returns video data from a mock api", async() => {
        const { result } = renderHook(() => useFetch())

        expect(result.current.videos).toHaveLength(0)

        await act(async () => {
            await waitFor(() => {
                expect(result.current.videos).toHaveLength(mockData.items.length)
            })
        })

        expect(mockApi).toHaveBeenCalledTimes(1)
        
        // this is a good test to test url changes
        expect(mockApi).toHaveBeenCalledWith(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${keys.youtubeAPI}&maxResults=20`
        )
    })

    it("Returns video data by returning a custom search parameter", async() => {
        const { result } = renderHook(() => useFetch())
        let sampleQuery = "Smash bros"

        await act(async () => {
            await waitFor(() => {
                result.current.setText(sampleQuery)
                expect(result.current.text).toBe(sampleQuery)
                expect(result.current.videos).toHaveLength(mockData.items.length)
            })
        })
    })
})
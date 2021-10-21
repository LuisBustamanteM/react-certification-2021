import React from 'react'
import { render, waitFor } from '@testing-library/react'
import {renderHook, act } from '@testing-library/react-hooks'

import {useFetch} from "./hooks";
import nock from 'nock'
import mockData from '../MockData/youtubeResult.json'
import config from "../config.json";
let env = config.currentEnv;
let { keys} = config.environments[env].api

const mockYoutubeApi =  () => {

    const scope = nock(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=${keys.youtubeAPI}&maxResults=20`)
        .get('/videos')
        .reply(200, mockData)
        .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true'
        })

    nock.disableNetConnect()
    return scope;
}


describe("Testing Custom Hooks with nock", ()  => {
    it.skip("Updates text state value",  () => {
        const { result } = renderHook(() => useFetch())
        let sampleQuery = "Smash bros"

        act(() => {
            result.current.setText(sampleQuery)
        })

        expect(result.current.text).toBe(sampleQuery)
    })

    it.skip("Returns an empty list of videos", async () => {
        let api = mockYoutubeApi()
        const { result } = renderHook(() => useFetch())

        expect(result.current.videos).toHaveLength(0)

        // Waitfor needed an additional library & environment to run, also we needed to wrap
        // inside wrap to work with renderHook
        await act(async () => {
            await waitFor(() => {
                expect(result.current.videos).toHaveLength(mockData.items.length)
            })
        })

        expect(api.isDone()).toBe(true);
    })
})
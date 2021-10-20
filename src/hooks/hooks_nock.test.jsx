import React from 'react'
import { render, waitFor } from '@testing-library/react'
import {renderHook, act } from '@testing-library/react-hooks'

import {useFetch} from "./hooks";
import nock from 'nock'
import mockData from '../MockData/youtubeResult.json'

const mockYoutubeApi =  () => {

    const scope = nock('http://localhost:8080')
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
    it("Updates text state value",  () => {
        const { result } = renderHook(() => useFetch())

        act(() => {
            result.current.setText("Wizeline")
        })

        expect(result.current.text).toBe("Wizeline")
    })

    it("Returns an empty list of videos", async () => {
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
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import {renderHook, act } from '@testing-library/react-hooks'
import {getUrl, useFetch} from "./hooks";
import nock from 'nock'
import mockData from '../MockData/youtubeResult.json'

const mockYoutubeApi =  () => {

    const scope = nock(getUrl("123", "LIST"))
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
    it("Updates fetch query parameter",  () => {
        const type = "LIST"
        const query = "Smash bros"
        const { result } = renderHook(() => useFetch(type))

        act(() => {
            result.current.setId(query)
        })

        expect(result.current.id).toBe(query)
    })
})
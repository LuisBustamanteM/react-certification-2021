import React from 'react'
import { waitFor } from '@testing-library/react'
import {renderHook, act } from '@testing-library/react-hooks'
import {getUrl, useFetch} from "./hooks";
import mockData from '../MockData/youtubeResult.json'

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
    it("Returns videos data from a text search parameter", async() => {

        const type = "LIST"
        const query = "Smash bros"
        const { result } = renderHook(() => useFetch(type))

        expect(result.current.videos).toHaveLength(0)

        await act(async () => {
            await waitFor(() => {
                result.current.setId(query)
                expect(result.current.videos).toHaveLength(mockData.items.length)
            })
        })

        expect(mockApi).toHaveBeenCalled()
        expect(mockApi).toHaveBeenCalledWith(getUrl(query, type))
    })

    it("Returns recommended videos data from a video id", async() => {
        const type = "RECOMMENDED"
        const id = "jPSjNbqUPtk"
        const { result } = renderHook(() => useFetch(type))

        await act(async () => {
            await waitFor(() => {
                result.current.setId(id)
                expect(result.current.id).toBe(id)
                expect(result.current.videos).toHaveLength(mockData.items.length)
            })
        })

        expect(mockApi).toHaveBeenCalledWith(getUrl(id, type))
    })

    it("Returns single video data from a video id", async() => {
        const type = "RECOMMENDED"
        const id = "jPSjNbqUPtk"
        const { result } = renderHook(() => useFetch(type))

        await act(async () => {
            await waitFor(() => {
                result.current.setId(id)
                expect(result.current.id).toBe(id)
                expect(result.current.videos).toHaveLength(mockData.items.length)
            })
        })

        expect(mockApi).toHaveBeenCalledWith(getUrl(id, type))
    })
})
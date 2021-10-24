import React from 'react';
import VideoList from './index';
import {render, getAllByRole, fireEvent, waitFor } from "@testing-library/react";
import mockData from "../../MockData/youtubeResult.json";
import { BrowserRouter as Router } from 'react-router-dom';
import {renderHook, act} from "@testing-library/react-hooks";
import {useFetch} from "../../hooks/hooks";


const mockApi = jest
    .spyOn(global, 'fetch')
    .mockImplementation(() =>
        Promise.resolve({json: () => Promise.resolve(mockData)})
    )
const items = mockData.items

describe("Testing <VideoList/>", () => {

    it("Displays a list of thumbnails items on <VideoList/>",  () => {

        const component = render (
            <Router>
                <VideoList videos={items}/>
            </Router>
        );

        const videoCards = component.getAllByRole("listitem")
        expect(videoCards).toHaveLength(items.length)
    });

    it("Updates the current video id when a thumbnail is selected",  async() => {
        const type = "RECOMMENDED"

        const { result } = renderHook(() => useFetch(type))

        const component = render (
            <Router>
                <VideoList videos={items} setId={result.current.setId}/>
            </Router>
        );
        const videoCards = component.getAllByRole("listitem")

        await act(async () => {
            await waitFor(() => {
                fireEvent.click(videoCards[0])
                expect(videoCards).toHaveLength(items.length)
                expect(result.current.id).toBe(items[0].id.videoId)
            })
        })

    });
});

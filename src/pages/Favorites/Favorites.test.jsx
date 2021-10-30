import React, {useReducer} from 'react';

import Favorites from './index';
import {render, getByRole, getAllByRole, waitFor} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import mockData from '../../MockData/youtubeResult.json'
import { StateContext, DispatchContext, initialState, appReducer } from "../../components/App/App.component";
import {renderHook, act} from "@testing-library/react-hooks";

const build = (items = [], ids = []) => {
    const {result} = renderHook(() => useReducer(appReducer, initialState))
    const [state, dispatch] = result.current

    const {container, debug} = render (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <Router>
                    <Favorites ids={ids}/>
                </Router>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );

    return {
        container,
        debug,
        state,
        dispatch,
        cardGrid: () => getByRole(container, "list"),
        videoItems: () => getAllByRole(container, "listitem"),
        errorMessage: () => getByRole(container, "heading")
    }
}
describe("Testing <Favorites/>", () => {
    // it.skip("Displays a  <CardGrid/> with error message when no videos are available", () => {
    //     const {cardGrid, errorMessage} = build()
    //
    //     expect(cardGrid())
    //     expect(errorMessage()).toHaveTextContent("You still haven't added favorite videos")
    // })
    //
    // it.skip("Displays a <CardGrid/> with favorited videos ", () => {
    //     const {cardGrid, videoItems} = build(mockData.items)
    //
    //     expect(cardGrid())
    //     act(() => {
    //         expect(videoItems()).toHaveLength(mockData.items.length)
    //     })
    //
    //     // makes a request by id
    // })

    it("Displays a <CardGrid/> with favorited videos searched by id", async () => {
        const ids = ["IftnkOx5FUU", "Wex3JL758H4", "82Q2XTJ8jWk", "vK683bq_-i0", "eQU-ygVq_Ek"]
        const {dispatch, state, cardGrid, videoItems} = build(ids)
        expect(videoItems())
        // expect(videoItems())


            //dispatch({type: "ADD_FAVORITES", value: ids})
            //console.log("From test: ", state)

            //expect(videoItems()).toHaveLength(mockData.items.length)


        // makes a request by id
    })

});
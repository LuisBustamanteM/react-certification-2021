import React from 'react'
import SearchBar from './index'
import {render, fireEvent, getByRole, waitFor} from "@testing-library/react"
import {useFetch} from '../../hooks/hooks'
import {renderHook, act } from '@testing-library/react-hooks'
import mockData from "../../MockData/youtubeResult.json";

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

const build = async () => {
    const type = "LIST"
    const {result} = renderHook(() => useFetch(type))
    const {container, debug} = render (<SearchBar setQuery={result.current.setId}/>)

    return {
        container,
        debug,
        inputText: () => getByRole(container, "textbox"),
        result
    }
}

describe("Testing SearchBar", ()  => {
    it("Updates input value & triggers a function on enter", async () => {
        const {inputText, result} = await build()
        const defaultState = "Wizeliners";


        await act(async () => {
            await waitFor(() => {
                fireEvent.change(inputText(), {target: {value: defaultState}})
                fireEvent.keyPress(inputText(), {key:"Enter", code:13, charCode: 13})

                expect(inputText()).toHaveValue(defaultState)
                expect(result.current.id).toBe(defaultState)
            })
        })

    })
})
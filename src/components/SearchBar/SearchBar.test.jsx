import React from 'react'
import SearchBar from './index'
import {render, fireEvent, getByRole} from "@testing-library/react"
import {useFetch} from '../../hooks/hooks'
import {renderHook, act } from '@testing-library/react-hooks'

const build = async () => {
    const {result} = renderHook(() => useFetch())
    const {container, debug} = render(<SearchBar setQuery={result.current.setText}/>)

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

        act(() => {
            fireEvent.change(inputText(), {target: {value: defaultState}})
            fireEvent.keyPress(inputText(), {key:"Enter", code:13, charCode: 13})
        })

        expect(inputText()).toHaveValue(defaultState)
        expect(result.current.text).toBe(defaultState)
    })
})
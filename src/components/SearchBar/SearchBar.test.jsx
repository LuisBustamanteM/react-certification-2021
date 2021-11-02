import React from 'react'
import SearchBar from './index'
import {render, fireEvent, getByRole, waitFor} from "@testing-library/react"
import { act } from '@testing-library/react-hooks'
import AppContext from "../../AppContext";

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: jest.fn(),
    }),
}));

const build = () => {
    const {container, debug} = render (
        <AppContext>
            <SearchBar/>
        </AppContext>
    )

    return {
        container,
        debug,
        inputText: () => getByRole(container, "textbox")
    }
}

describe("Testing SearchBar", ()  => {
    it("Updates input value & triggers a function on enter", async () => {
        const {inputText} = build()
        const defaultState = "Wizeliners";

        expect(inputText())
        await act(async () => {
                fireEvent.change(inputText(), {target: {value: defaultState}})
                fireEvent.keyPress(inputText(), {key:"Enter", code:13, charCode: 13})
        })

        expect(inputText()).toHaveValue(defaultState)

    })
})
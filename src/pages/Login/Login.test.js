import React from 'react'
import { render, getByRole, getByText, fireEvent, waitFor, act } from '@testing-library/react';
import Login from './Login.component';
import AppContext from "../../StateHandlers/AppContext";

const build = () => {

    const {container, debug} = render (
        <AppContext>
            <Login/>
        </AppContext>
    )

    return {
        container,
        debug,
        userInput: () => getByRole(container, "textbox"),
        passwordInput: () => getByRole(container, "password")
    }
}
describe("Display content inside <Login/>", () => {

    it('Updates Login Values', async () => {
        const {userInput, passwordInput} = build()
        const sampleData = {
            username: "user",
            password: "password"
        }
        await act(async () => {
            await waitFor(() => {


                fireEvent.change(userInput(), {target: {value: sampleData.username}})
                expect(userInput().value).toBe(sampleData.username)

                fireEvent.change(passwordInput(), {target: {value: sampleData.password}})
                expect(passwordInput().value).toBe(sampleData.password)

            })
        })
    });
})

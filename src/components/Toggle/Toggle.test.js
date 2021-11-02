import React from 'react';

import Toggle from './index';
import {render, getByText, getByRole, act, fireEvent} from "@testing-library/react";
import AppContext from "../../AppContext";

describe("Testing <Toggle/>", () => {
    it("Changes mode when click on<Toggle/> ", () => {
        const {container} = render(
            <AppContext>
                <Toggle/>
            </AppContext>
            );


        const toggleLabel = (text) => getByText(container, text)
        const slider = () => getByRole(container, "slider")

        expect(toggleLabel("Dark Mode"))
        expect(slider())

        act(() => {
            fireEvent.click(slider())
        })

        expect(toggleLabel("Light Mode"))


    });

});
import React from 'react'
import { render, getByRole, fireEvent, act } from '@testing-library/react';
import SideMenu from './SideMenu.component';
import { BrowserRouter} from "react-router-dom";
import AppContext from "../../StateHandlers/AppContext";

const build = () => {

    const {container, debug} = render (
        <AppContext>
            <BrowserRouter>
                <SideMenu/>
            </BrowserRouter>
        </AppContext>
    )

    return {
        container,
        debug,
        burgerButton: () => getByRole(container, "showmenu"),
        sideNav: () => getByRole(container, "navigation"),
    }
}
describe("Displays behavior of  <SideMenu/>", () => {

    it('shows <SideNav/> on burgerbutton click', () => {
        const {burgerButton, sideNav } = build()
        expect(burgerButton())

        act(() => {
            fireEvent.click(burgerButton())
        })
        expect(sideNav())

    });
})

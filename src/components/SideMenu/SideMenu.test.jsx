import React from 'react'
import { render } from '@testing-library/react';
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
        debug
    }
}
describe("Displays behavior of  <SideMenu/>", () => {

    it('Displays BurgerMenu', () => {
        const {container,  } = build()

        expect(container).toMatchSnapshot()

    });
})

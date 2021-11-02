import React from 'react';

import Navbar from './index';
import {render} from "@testing-library/react";
import AppContext from "../../StateHandlers/AppContext";

describe("Testing <Navbar/>", () => {
    test("<Navbar/> matches snapshot", () => {
        const component = render(
            <AppContext>
                <Navbar/>
            </AppContext>
            );

        expect (component.container).toMatchSnapshot();
    });

});
import React from 'react';

import {render} from "@testing-library/react";
import AppContext from "../../StateHandlers/AppContext";
import RightNav from "./index";

describe("Testing <RightNav/>", () => {
    test("<RightNav/> matches snapshot", () => {
        const component = render(
            <AppContext>
                <RightNav/>
            </AppContext>
        );
        expect (component.container).toMatchSnapshot();
    });

});
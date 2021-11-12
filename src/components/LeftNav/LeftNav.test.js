import React from 'react';

import {render} from "@testing-library/react";
import AppContext from "../../StateHandlers/AppContext";
import LeftNav from "./index";

describe("Testing <LefttNav/>", () => {
    test("<LeftNav/> matches snapshot", () => {
        const component = render(
            <AppContext>
                <LeftNav/>
            </AppContext>
            );
        expect (component.container).toMatchSnapshot();
    });

});
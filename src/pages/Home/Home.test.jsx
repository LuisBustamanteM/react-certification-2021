import React from 'react';

import HomePage from './index';
import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";

describe("Testing <HomePage/>", () => {
    it("Compares with a snapshot of <HomePage/>", () => {
        const component = render (
            <Router>
                <HomePage/>
            </Router>
        );

        expect(component).toMatchSnapshot()
    })
});


/*
* Describir  e implementar por pasos el proceso de los componentes de Home
*
* */
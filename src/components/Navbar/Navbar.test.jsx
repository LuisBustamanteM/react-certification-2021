import React from 'react';

import Navbar from './index';
import {render} from "@testing-library/react";

describe("Testing <Navbar/>", () => {
    test("<Navbar/> matches snapshot", () => {
        const component = render(<Navbar />);
        expect (component.container).toMatchSnapshot();
    });

});
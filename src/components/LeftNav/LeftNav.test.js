import React from 'react';

import RightNav from './index';
import {render} from "@testing-library/react";

describe("Testing <RightNav/>", () => {
    test("<RightNav/> matches snapshot", () => {
        const component = render(<RightNav />);
        expect (component.container).toMatchSnapshot();
    });

});
import React from 'react';

import Toggle from './index';
import {render} from "@testing-library/react";

describe("Testing <Toggle/>", () => {
    test("<Toggle/> matches snapshot", () => {
        const component = render(<Toggle />);
        expect (component.container).toMatchSnapshot();
    });

});
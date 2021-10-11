import React from 'react';

import SearchBar from './index';
import {render} from "@testing-library/react";

describe("Testing <SearchBar/>", () => {
    test("<SearchBar/> matches snapshot", () => {
        const component = render(<SearchBar />);
        expect (component.container).toMatchSnapshot();
    });

});
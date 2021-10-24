import React from 'react';

import Layout from './index';
import {render} from "@testing-library/react";

describe("Testing <Layout/>", () => {
    test("<Layout/> matches snapshot", () => {
        const component = render(<Layout />);
        expect (component.container).toMatchSnapshot();
    });

});
import React from 'react';

import App from './index';
import {render} from "@testing-library/react";

describe("Testing <App/>", () => {
    test("Renders <App/>", () => {
        const component = render(<App />);
        expect(component.container);
    });

});
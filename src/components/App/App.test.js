import React from 'react';
import App from './index';
import {render } from "@testing-library/react";



describe("Testing <AppComponent/>", () => {
    test("Renders <AppComponent/>", () => {
        const component = render(<App />);

        expect(component);
    });

});
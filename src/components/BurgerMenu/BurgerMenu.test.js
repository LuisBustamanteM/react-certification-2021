import React from 'react';

import BurgerMenuComponent from './index';
import {render} from "@testing-library/react";

describe("Testing <BurgerMenuComponent/>", () => {
    test("<BurgerMenuComponent/> matches snapshot", () => {
        const component = render(<BurgerMenuComponent />);
        expect (component.container).toMatchSnapshot();
    });

});
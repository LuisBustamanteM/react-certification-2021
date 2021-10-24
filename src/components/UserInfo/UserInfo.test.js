import React from 'react';

import UserInfo from './index';
import {render} from "@testing-library/react";

describe("Testing <UserInfo/>", () => {
    test("<UserInfo/> matches snapshot", () => {
        const component = render(<UserInfo />);
        expect (component.container).toMatchSnapshot();
    });

});
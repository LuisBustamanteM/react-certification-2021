import React from 'react';
import UserInfo from './index';
import {render} from "@testing-library/react";
import AppContext from "../../AppContext";

describe("Testing <UserInfo/>", () => {
    test("<UserInfo/> matches snapshot", () => {
        const component = render(
            <AppContext>
                <UserInfo/>
            </AppContext>
            );
        expect (component.container).toMatchSnapshot();
    });

});
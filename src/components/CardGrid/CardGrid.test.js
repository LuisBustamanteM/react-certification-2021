import React from 'react';
import ReactDOM from  'react-dom';

import CardGrid from './index';
import {render} from "@testing-library/react";

describe("Testing <CardGrid/>", () => {
    test("<CardGrid/> matches snapshot", () => {
        const component = render(<CardGrid url={"http://localhost:8000/videos"}/>);
        expect (component.container).toMatchSnapshot();
    });

    test("<CardGrid/> matches snapshot when receiving no response from the server", () => {
        const component = render(<CardGrid url={"http://localhost:8000/video"}/>);
        expect (component.container).toMatchSnapshot();
    });

});
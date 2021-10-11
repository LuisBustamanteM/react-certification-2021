import React from 'react';
import ReactDOM from  'react-dom';

import CardGrid from './index';
import {render} from "@testing-library/react";

test("<CardGrid/> matches snapshot", () => {
    const component = render(<CardGrid url={null}/>);

    expect (component.container).toMatchSnapshot();
});
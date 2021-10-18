import React, {useEffect, useState} from 'react';
import ReactDOM from  'react-dom';

import CardGrid from './index';
import {render} from "@testing-library/react";
import fetchApi from "../../utils/fetchApi";

describe("Testing <CardGrid/>", () => {

    test("<CardGrid/> matches snapshot with items",  async () => {
        let items = await fetchApi("http://localhost:8080/videos")
                            .then(data => data.items);

        const component = render (<CardGrid items={items}/>);
        expect (component.container).toMatchSnapshot();
    });

    test("<CardGrid/> matches snapshot without items",  () => {
        const component = render (<CardGrid />);
        expect (component.container).toMatchSnapshot();
    });

});
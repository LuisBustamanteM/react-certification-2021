import React, {useState} from 'react';
import SearchBar from './index';
import {render} from "@testing-library/react";
import {InputText} from './style';

describe("Testing <SearchBar/>", () => {
    test("<SearchBar/> matches snapshot", () => {
        const component = render(<SearchBar />);
        expect (component.container).toMatchSnapshot();
    });

    // TODO Test with hooks when value is updated
    test("Correct text display on <InputText/>", () => {
        let defaultState = "Wizeline";

        const {getByDisplayValue } = render(<InputText type="text" placeholder={"Search..."} value={defaultState} onChange={() => {}}/>);

        getByDisplayValue(defaultState);

    });


});
import React, {useEffect, useState} from 'react';
import ReactDOM from  'react-dom';

import HomePage from './index';
import CardGrid from "../../components/CardGrid";
import {fireEvent, render, getByRole} from "@testing-library/react";



const build = () => {
    const { container, debug} = render(<HomePage/>)

    return {
        container,
        debug,
        searchbar: () => getByRole(container, "textbox"),
        submitButton: () => getByRole(container, "button", {name:"SEARCH"}),
        cardGrid: () => getByRole(container, "list") // TODO: Change to Ul
    }
}

describe("Testing <HomePage/>", () => {

    it("Triggers useFetch hook", () => {
        const {searchbar} = build();

    })

    // Test textbox

    // Test cardGrid

    // it("Displays Search bar and returns query parameters", () => {
    //    const {searchbar, debug} = build();
    //     let defaultState = "Wizeline";
    //     debug(searchbar());
    //     fireEvent.focus(searchbar());
    //     //
    //     // fireEvent.change(searchbar(), {target: {value: defaultState}});
    //     // expect(searchbar()).toHaveValue(defaultState);
    //     //
    //     // fireEvent.keyPress(searchbar(),  {key: "Enter"})
    //
    //
    // });
    // Test Youtube API
    // it("Must return Youtube Videos when requesting the API", () => {
    //
    //     // console.log(mockData);
    //     // Check Javascript YouTube API documentation
    //     // Check which API Call you need to get a list of videos by search parameter
    //     // Create a mock with jest so you dont overuse fetch
    // })

    // Test search parameters
    // it("Must return api search parameters", () => {
    //
    // })

    // Test youtube API setup
    //

    // test("<CardGrid/> is filled with items",  async () => {
    //     let items = await fetchApi("http://localhost:8080/videos")
    //         .then(data => data.items);
    //
    //     const component = render (<CardGrid items={items}/>);
    //
    //     expect (component.container).toMatchSnapshot();
    // });

    // test("<CardGrid/> Returns error message when it no longer has items",  () => {
    //     const component = render (<CardGrid />);
    //     expect (component.container).toMatchSnapshot();
    // });

});
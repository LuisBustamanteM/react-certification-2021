import React, {createContext} from 'react';

import App from './index';
import {render, getByRole, fireEvent } from "@testing-library/react";



describe("Testing <App/>", () => {
    test("Renders <App/>", () => {
        const component = render(<App />);
        expect(component.container);
    });

    test("Get theme data from context", () => {
        //const ThemeContext = createContext("light")


        // const {container} = render(
        //     <ThemeContext.Provider value={"light"}>
        //         <App/>
        //     </ThemeContext.Provider>
        // )

        const build = () => {
            const {container, debug} = render(<App/>)

            return {
                container,
                article: () => getByRole(container, "article"),
                toggleSwitch: () => getByRole(container, "checkbox")
            }
        }

        const {article, toggleSwitch} = build()


        expect( article()).toBeInTheDocument()
        expect( article()).toHaveTextContent("light")

        fireEvent.click( toggleSwitch() )
    })

});
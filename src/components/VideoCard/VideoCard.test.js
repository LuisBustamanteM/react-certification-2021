import React from 'react';
import {render} from "@testing-library/react";
import VideoCard from './index';

import { BrowserRouter as Router } from 'react-router-dom';


test("<VideoCard/> matches snapshot", () => {
    const testImage = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/440px-SpongeBob_SquarePants_character.svg.png";

    const component = render(
        <Router>
            <VideoCard
                defaultImage={testImage}
                mediumImage={testImage}
                highImage={testImage}
                title={"Testing title"}
                description={"Lorem ipsum..."}/>
        </Router>
    );

    expect (component.container).toMatchSnapshot();
});

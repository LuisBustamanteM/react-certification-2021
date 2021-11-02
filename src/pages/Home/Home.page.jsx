import React, {useContext, useRef} from 'react';

import CardGrid from '../../components/CardGrid';
import {HomeContainer, Title} from './style';
import {StateContext} from "../../StateHandlers/AppContext";

function HomePage(props) {
  const sectionRef = useRef(null);
  const {darkMode, videos} = useContext(StateContext)

  return (
    <HomeContainer darkMode={darkMode} className="homepage" ref={sectionRef}>
      <Title darkMode={darkMode}>Welcome To The Challenge!</Title>
      <CardGrid items={videos} errorMessage={"No videos to display, Try Reloading."}/>
    </HomeContainer>
  );
}

export default HomePage;

import React, {useContext, useRef} from 'react';

import CardGrid from '../../components/CardGrid';
import {Title} from './style';
import {StateContext} from "../../components/App/App.component";

function HomePage(props) {
  const sectionRef = useRef(null);
  const {darkMode, videos} = useContext(StateContext)

  return (
    <section className="homepage" ref={sectionRef}>
      <Title darkMode={darkMode}>Welcome To The Challenge!</Title>
      <CardGrid items={videos}/>
    </section>
  );
}

export default HomePage;

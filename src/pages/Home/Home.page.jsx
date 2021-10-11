import React, { useRef } from 'react';

import Navbar from  '../../components/Navbar';
import CardGrid from '../../components/CardGrid';
import {Title} from './style';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Navbar/>

      <Title>Welcome To The Challenge!</Title>
      <CardGrid/>
    </section>
  );
}

export default HomePage;

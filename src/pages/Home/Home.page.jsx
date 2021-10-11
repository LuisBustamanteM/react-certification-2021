import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Navbar from  '../../components/Navbar';
import CardGrid from '../../components/CardGrid';
import {Title} from './style';

function HomePage() {
  const history = useHistory();
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

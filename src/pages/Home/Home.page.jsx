import React, { useRef} from 'react';

import CardGrid from '../../components/CardGrid';
import {Title} from './style';

function HomePage(props) {
  const sectionRef = useRef(null);
  return (
    <section className="homepage" ref={sectionRef}>
      <Title >Welcome To The Challenge!</Title>
      <CardGrid items={props.videos}/>
    </section>
  );
}

export default HomePage;

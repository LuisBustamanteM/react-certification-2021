import React, { useRef} from 'react';

import Navbar from  '../../components/Navbar';
import CardGrid from '../../components/CardGrid';
import {Title} from './style';

import {useFetch} from "../../hooks/hooks";

function HomePage(props) {
  const sectionRef = useRef(null);
  const {setText, videos} = useFetch()

  return (
    <section className="homepage" ref={sectionRef}>
      <Navbar setQuery={setText} history={props.history}/>
      <Title >Welcome To The Challenge!</Title>
      <CardGrid items={videos}/>
    </section>
  );
}

export default HomePage;

import React, { useRef, useEffect} from 'react';

import Navbar from  '../../components/Navbar';
import CardGrid from '../../components/CardGrid';
import {Title} from './style';

import {useFetch} from "../../hooks/hooks";

function HomePage(props) {
    const defaultValue = "wizeline"
  const sectionRef = useRef(null);
  const {setId, videos, id} = useFetch("LIST", defaultValue)

  return (
    <section className="homepage" ref={sectionRef}>
      <Navbar setQuery={setId} query={defaultValue} history={props.history}/>
      <Title >Welcome To The Challenge!</Title>
      <CardGrid items={videos}/>
    </section>
  );
}

export default HomePage;

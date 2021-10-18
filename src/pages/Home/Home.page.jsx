import React, {useEffect, useRef, useState} from 'react';

import Navbar from  '../../components/Navbar';
import CardGrid from '../../components/CardGrid';
import {Title} from './style';
import fetchApi from "../../utils/fetchApi";

// import data from '../../MockData/videos.json'; // - For mock data

function HomePage() {
  const sectionRef = useRef(null);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchApi("http://localhost:8080/videos")
            .then((data) => {
                console.log("test");
                setItems(data.items)
            })
            .catch(() => setItems([]));


    }, [JSON.stringify(items)]);

  return (
    <section className="homepage" ref={sectionRef}>
      <Navbar/>
      <Title>Welcome To The Challenge!</Title>
      <CardGrid items={items}/>
    </section>
  );
}

export default HomePage;


import  ListItem  from "../components/ListItem"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import "../styles/List.scss"
import { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from 'react';

const List = ({title,fetchURL}) => {
    const [movies,setMovies] = useState([])

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();

    useEffect ( ()=>{
      axios.get(fetchURL).then((response)=>{
              setMovies(response.data.results);
      });
      },[fetchURL]); 

    const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }

  return (
    <div className='list'>
        <span className="listTitle">{title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
            className="sliderArrow left" onClick={() => handleClick("left")}
            style={{display: !isMoved && "none"}} />
            <div className="container" ref={listRef}>
                  {movies.map((item, id) => (
                    <ListItem index={id++} item={item} />
                  ))}
            </div>
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick("right")}/> 
        </div>
    </div>
  )
}

export default List
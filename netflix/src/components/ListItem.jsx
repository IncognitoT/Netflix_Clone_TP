import { PlayArrow , Add ,ThumbUpAltOutlined , ThumbDownOutlined, ThumbUp} from '@material-ui/icons'
import React from 'react'
import "../styles/ListItem.scss"
import { useState } from "react";
import axios from "axios";
import { postFavourite } from "../service/favouriteSer";
import { Link } from 'react-router-dom';

const ListItem = ({index,item}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    const [like,setLike] = useState(false)
    const [saved,setSaved] = useState(false)

    const saveShow = async (e) => {
      setLike(!like);
      setSaved(true);
      try {
        const data = { movieName: item?.title, movieDesc:item?.overview,movieRelease:item?.release_date}
        await postFavourite(data)
          // await axios.post("http://localhost:8800/api/fav/favorite", { movieName:"john wick", movieDesc:"Who killed my dog??"});
          //const res = await axios.get("http://localhost:8080/netflix/getUsers");
          //console.log(res)
      } catch (err) {}
    };

    const playPage = () => {
      let url = "http://localhost:3000/watch";
      window.location(url);
    };


  const truncateString = (str, num) => {
      if (str?.length > num) {
        return str.slice(0, num) + '...';
      } else {
        return str;
      }
    };

  return (
    <div className='listitem'
          
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
     
        <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt=""
        />
        {isHovered && (
        <>
         
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <Link to='/watch'>
                  <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <p onClick={saveShow}>
              {like ? (
                      <ThumbUp className="icon" />
                      ) : (
                      <ThumbUpAltOutlined className="icon" />  
              )}
              </p>
              <ThumbDownOutlined className="icon" />
              
       
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>{item?.release_date}</span>
            </div>
            <div className="desc">
                {truncateString(item?.overview,120)}
            </div>
            <div className="genre">Action</div>
            
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem
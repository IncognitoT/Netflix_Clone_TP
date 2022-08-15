import List from '../components/List'
import { AcUnit } from '@material-ui/icons'
import React from 'react'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import "../styles/Home.scss"
import requests from '../Requests'


const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Featured  />
        <List title='Upcoming' fetchURL={requests.requestUpcoming} />
        <List title='Popular' fetchURL={requests.requestPopular}/>
        <List title='Trending' fetchURL={requests.requestTrending}/>
        <List title='TopRated' fetchURL={requests.requestTopRated}/>
        <List title='Horror' fetchURL={requests.requestHorror}/>
    </div>
  )
}

export default Home
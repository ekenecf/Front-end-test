import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
// import LatestTrend from './LatestTrend'
import Products from './Products'
// import image from '../public/cloth.jpg'

const Home = () => {
  return (
    <div className="HomePage">
      <form className="search-box">
        <input type="search" name="focus" placeholder="Search" />
        <button>
          <AiOutlineSearch className="Search" />{' '}
        </button>
      </form>
      {/* <LatestTrend /> */}
    </div>
  )
}

export default Home

import { AiOutlineSearch } from 'react-icons/ai'
import { MdArrowDropDown } from 'react-icons/md'
import { useState } from 'react'
import { FcLike } from 'react-icons/fc'
import { GiSelfLove } from 'react-icons/gi'
import sample from '../public/cloth.jpg'

const Products = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [like, setLike] = useState(true)
  return (
    <div className="products">
      <form className="search-box">
        <input type="search" name="focus" placeholder="Search" />
        <button>
          <AiOutlineSearch className="Search" />{' '}
        </button>
      </form>
      <div className="productsContainer">
        <div className="productSearch">
          <p>Search Results</p>
          <div className="brand">
            <p>BRAND</p>
            <MdArrowDropDown />
          </div>
          <div className="searchQuery">
            <input type="checkbox" />
            <p>Search type</p>
          </div>
          <div className="searchQuery">
            <input type="checkbox" />
            <p>Search type2</p>
          </div>
          <hr />
          <div className="brand">
            <p>PRICE RANGE</p>
            <MdArrowDropDown />
          </div>
          <div className="searchQuery">
            <input type="checkbox" />
            <p>Under 500 search</p>
          </div>
          <div className="searchQuery">
            <input type="checkbox" />
            <p>1000 - 3000</p>
          </div>
          <hr />
          <div className="brand">
            <p>RATTINGS</p>
            <MdArrowDropDown />
          </div>
          <div className="searchQuery">
            <div className="star-rating">
              <input type="radio" id="star5" name="rating" value="5" />
              <label for="star5">.</label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label for="star4">.</label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label for="star3">.</label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label for="star2">.</label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label for="star1">.</label>
            </div>
          </div>
          <div className="searchQuery">
            <div id="div2" className="star-rating">
              <input type="radio" id="star5-2" name="rating2" value="5" />
              <label for="star5-2">.</label>
              <input type="radio" id="star4-2" name="rating2" value="4" />
              <label for="star4-2">.</label>
              <input id="star3-2" type="radio" name="rating2" value="3" />
              <label for="star3-2">.</label>
              <input id="star2-2" type="radio" name="rating2" value="2" />
              <label for="star2-2">.</label>
              <input id="star1-2" type="radio" name="rating2" value="1" />
              <label for="star1-2">.</label>
            </div>
          </div>
          <div className="searchQuery">
            <div id="div3" className="star-rating">
              <input type="radio" id="star5-3" name="rating3" value="5" />
              <label for="star5-3">.</label>
              <input type="radio" id="star4-3" name="rating3" value="4" />
              <label for="star4-3">.</label>
              <input type="radio" id="star3-3" name="rating3" value="3" />
              <label for="star3-3">.</label>
              <input type="radio" id="star2-3" name="rating3" value="2" />
              <label for="star2-3">.</label>
              <input type="radio" id="star1-3" name="rating3" value="1" />
              <label for="star1-3">.</label>
            </div>
          </div>
          <div className="searchQuery">
            <div id="div4" className="star-rating">
              <input type="radio" id="star5-4" name="rating4" value="5" />
              <label for="star5-4">.</label>
              <input type="radio" id="star4-4" name="rating4" value="4" />
              <label for="star4-4">.</label>
              <input type="radio" id="star3-4" name="rating4" value="3" />
              <label for="star3-4">.</label>
              <input type="radio" id="star2-4" name="rating4" value="2" />
              <label for="star2-4">.</label>
              <input type="radio" id="star1-4" name="rating4" value="1" />
              <label for="star1-4">.</label>
            </div>
          </div>
        </div>
        <div className="productsItems">
          <div
            className="productImageCard"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img src={sample} alt="productImg" />
            {like ? (
              <GiSelfLove className="like" onClick={() => setLike(false)} />
            ) : (
              <FcLike className="like" onClick={() => setLike(true)} />
            )}
            {isHovering && (
              <div className="details">
                <button>View Product</button>
              </div>
            )}
            <p>Round Neck aba made polo1</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <FcLike className="like" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
          <div className="productImageCard">
            <img src={sample} alt="productImg" />
            <p>Round Neck aba made polo</p>
            <p>Amount</p>
            <p>Ratings</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

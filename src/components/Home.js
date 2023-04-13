import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import axios from 'axios'
import LatestTrend from './LatestTrend'
import Products from './Products'

const Home = () => {
  const [latestProducts, setlatestProducts] = useState('')
  const [categoryProduct, setcategoryProduct] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [name, setName] = useState('')

  const getLatestProduct = () => {
    setisLoading(true)
    axios
      .get('https://fakestoreapi.com/products?limit=5')
      .then((response) => {
        setlatestProducts(response)
        setisLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getCategory = (catSearch) => {
    setisLoading(true)
    axios
      .get(`https://fakestoreapi.com/products/category/${catSearch}`)
      .then((response) => {
        setcategoryProduct(response)
        setisLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleCategory(e, nameInput) {
    e.preventDefault()
    getCategory(nameInput)
  }

  useEffect(() => {
    if (name) {
      getLatestProduct()
    }
  }, [name])

  return (
    <div className="HomePage">
      <form className="search-box" onSubmit={(e) => handleCategory(e, name)}>
        <input
          type="search"
          name="focus"
          placeholder="Search"
          onChange={(e) => setName(e.target.value)}
        />
        <button>
          <AiOutlineSearch className="Search" />{' '}
        </button>
      </form>
      { isLoading ? (
        <p className="loading">Loading...</p>
      )  : (
           categoryProduct.data !== undefined ?  <Products data={categoryProduct} /> :
        <LatestTrend data={ latestProducts.data } name={ name } />
      )}
    </div>
  )
}

export default Home

import React from 'react'
import DataContext from '../context/DataContext'
import products from "./Product"
import videoplayer from "./videoPlayer"

function All_Products() {
  const{product}=useContext(DataContext)
  return (
    <>Products item={Product}</>
  )
}

export default All_Products;
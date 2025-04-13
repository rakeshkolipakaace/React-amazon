import React,{useContext} from 'react'
import DataContext from '../context/DataContext'
import Products from "./Product"

import Videoplayer from "./videoPlayer"

const All_Products = () =>{
  const {products} =useContext(DataContext);
  return (
    <>
        <Videoplayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/large_2x.mp4"/>
        <Products items={products}/>
    
   </>
  )
}

export default All_Products;
import React , {useState} from 'react'
import DataContext from "./DataContext"
import {items} from "./Data"

const DataState=(props)=> {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(items)
  return (
    <DataContext.Provider value={{products,setProducts,cart,setCart}}>{props.children}</DataContext.Provider>
  );
};

export default DataState
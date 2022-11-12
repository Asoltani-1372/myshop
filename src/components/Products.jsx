import axios from 'axios'
import {useState , useEffect} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({sort , filter , cat}) => {
  const {products , setProducts} = useState([])
  const {filterProducts , setFiltertProducts} = useState([])

  useEffect( () => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        setProducts(res.data)
      }
      catch(err) {

      }
    }
    getProducts()
  } , [cat])
  
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products
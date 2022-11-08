import { useLocation, } from 'react-router'
import {useState} from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Option = styled.option`
    
`
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`

const ProductList = () => {
  const [filters , setFilters] = useState({})
  const [sort , setSort] = useState("newest")

  const location = useLocation()
  const cat = location.pathname.split("/"[2])

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters (
      {...filters , [e.target.name] : value} 
    )
  } 

  return (
    <Container>
        <Navbar />
        <Title>product 1</Title>
        <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="sixe" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value) }>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList
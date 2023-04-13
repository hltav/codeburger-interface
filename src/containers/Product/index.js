import React, { useState, useEffect } from 'react'

import Productlogo from '../../assets/layout2.svg'
import api from '../../services/api'
import { Container, ProductImg, CategoryButton, CategoryMenu } from './styles'

function Product() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()
  }, [])
  return (
    <Container>
      <ProductImg src={Productlogo} alt="logo da home" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton key={category.id}>{category.name}</CategoryButton>
          ))}
      </CategoryMenu>
    </Container>
  )
}

export default Product

import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import Productlogo from '../../assets/layout2.svg'
import { CartProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, ProductImg, CategoryButton, CategoryMenu, ProductContainer } from './styles'

export function Product({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setfilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory
      )

      setfilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={Productlogo} alt="logo da home" />
      <CategoryMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductContainer>
        {filteredProducts &&
          filteredProducts.map((product) => <CartProduct key={product.id} product={product} />)}
      </ProductContainer>
    </Container>
  )
}

Product.propTypes = {
  location: PropTypes.object
}

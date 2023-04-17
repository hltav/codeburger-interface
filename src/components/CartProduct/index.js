import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '..'

import { useCart } from '../../hooks/CartContext'
import { Container, Image, ProductName, ProductPrice, ContainerContent } from './styles'

export function CartProduct({ product }) {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <ContainerContent>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </ContainerContent>
    </Container>
  )
}

CartProduct.propTypes = {
  product: PropTypes.object
}

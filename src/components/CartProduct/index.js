import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '..'

import { useCart } from '../../hooks/CartContext'
import { Container, Image, ProductName, ProductPrice, ContainerContent } from './styles'

export function CartProduct({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <ContainerContent>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </ContainerContent>
    </Container>
  )
}

CartProduct.propTypes = {
  product: PropTypes.object
}

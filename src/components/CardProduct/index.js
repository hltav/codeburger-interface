import PropTypes from 'prop-types'
import React from 'react'

import Button from '../Button'
import { Container, Image, ProductName, ProductPrice, ContainerContent } from './styles'

function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <ContainerContent>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button>Adicionar</Button>
      </ContainerContent>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}

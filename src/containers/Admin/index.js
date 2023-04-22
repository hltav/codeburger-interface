import PropTypes from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components'
import paths from '../../constants/paths'
import ListProducts from './ListProducts'
// eslint-disable-next-line no-unused-vars
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}

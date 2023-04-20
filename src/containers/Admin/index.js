import React from 'react'

import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
// eslint-disable-next-line no-unused-vars
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>
        {/* <Orders /> */}
        <ListProducts />
      </ContainerItems>
    </Container>
  )
}

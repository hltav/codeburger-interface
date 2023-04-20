import React from 'react'

import listLinks from './menu-list'
import { Container, ItemContainer, ListLinks } from './styles'

export function SideMenuAdmin() {
  return (
    <Container>
      <hr></hr>
      {listLinks.map((item) => (
        <ItemContainer key={item.id}>
          <item.icon className="icon" />
          <ListLinks to={item.link}>{item.label}</ListLinks>
        </ItemContainer>
      ))}
    </Container>
  )
}

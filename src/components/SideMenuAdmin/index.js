import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLinks } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={true}>
          <item.icon className="icon" />
          <ListLinks to={item.link}>{item.label}</ListLinks>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: 30 }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLinks to="/login" onClick={logout}>
          Sair
        </ListLinks>
      </ItemContainer>
    </Container>
  )
}

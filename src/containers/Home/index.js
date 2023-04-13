import React from 'react'

import Homelogo from '../../assets/homelogo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={Homelogo} alt="logo da home" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home

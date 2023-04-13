import React from 'react'

import Homelogo from '../../assets/homelogo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={Homelogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home

/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

function Button({ children, ...rest }) {
  console.log(children)
  return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}

/* eslint-disable no-unused-vars */
/* eslint-disable import-helpers/order-imports */
import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const user = { name: 'Hudson', age: 38 }
  const outroUser = { name: 'Tavares', age: 40 }

  return <UserContext.Provider value={{ user, outroUser }}> {children} </UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used with UserContext')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}

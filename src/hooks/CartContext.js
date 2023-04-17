import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    await updateLocalStorage(newCartProducts)
  }

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId)

    setCartProducts(newCart)
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCart))
  }
  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    )

    if (JSON.stringify(newCart) !== JSON.stringify(cartProducts)) {
      setCartProducts(newCart)
      updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartDate = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartDate) {
        setCartProducts(JSON.parse(clientCartDate))
      }
    }

    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{ putProductInCart, cartProducts, increaseProducts, decreaseProducts }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}

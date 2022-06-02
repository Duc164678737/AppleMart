import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CartBtn = () => {

  const state = useSelector((state) => state.addItem)
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart
        ({state.length})
      </NavLink>

      {/* {state.map((cartItem) =>
        <NavLink to="/cart" className="btn btn-outline-primary ms-2">
          <span className="fa fa-shopping-cart me-1"></span>
          {cartItem.quantity === undefined
            ? <span>Cart ({1})</span>
            : <span>Cart ({cartItem.quantity})</span>
          }
        </NavLink>
      )} */}
    </>
  )
}

export default CartBtn
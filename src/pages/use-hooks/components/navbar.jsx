import React, { useContext } from 'react'
import { AppContext } from '../index'

const Navbar = () => {
  const { name } = useContext(AppContext)

  return (
    <div>{name}</div>
  )

}

export default Navbar
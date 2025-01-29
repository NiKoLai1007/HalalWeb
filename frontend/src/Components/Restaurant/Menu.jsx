import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCarousel from './foodcarousel'
import MenuList from './MenuList'
import '../../CSS/Menu/Menu.css'
function Menu() {
  return (
    <div className='menu-container'>
      <FoodCarousel/>
      <MenuList/>
    </div>
  )
}

export default Menu
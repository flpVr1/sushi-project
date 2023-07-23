import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { cartContext } from '../Context/CartContext'
import './CartContent.css'

const CartContent = () => {
   const { cart } = useContext(cartContext);

   return (
      <div className='cart'>
         <div className='cart__logo'>
            <Link to='/'>
               <img src={logo} alt='logo' />
            </Link>
         </div>

         <div className='cart__content'>
            <h2>Carrito de Compras</h2>
            {/* Aquí se muestran los productos agregados al carrito */}
            <ul className='cart__content-ul'>
               {cart.map((item) => (
                  <li className='cart__li' key={item.id}>
                     <img className='img-li' src={item.img} alt='img-cartContent' />
                     <h3>{item.name}</h3>
                     <p>$ {item.price}</p>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default CartContent;
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { cartContext } from '../Context/CartContext';
import './Menu.css';

const Menu = () => {
   const [menuData, setMenuData] = useState([]);
   const { addToCart } = useContext(cartContext);

   useEffect(() => {
      // Hacer la solicitud GET a menu.json usando axios
      axios('menu.json').then((response) => {
         setMenuData(response.data);
      }).catch((error) => {
         console.error('Error al importar datos desde menu: ', error);
      });
   }, []);

   return (
      <div className='menu' id='menu'>
         {/* Iterar sobre el array de menuData y mostrar cada tarjeta */}
         {menuData.map((item) => (
            <div className='card' key={item.id}>
               <img src={item.img} alt='item-card-img' />
               <h3>{item.name}</h3>
               <h4>$ {item.price}</h4>
               <button onClick={() => addToCart(item)}>Agregar al carrito</button>
            </div>
         ))}
      </div>
   );
};

export default Menu;
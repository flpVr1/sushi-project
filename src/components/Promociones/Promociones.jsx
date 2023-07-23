import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { cartContext } from '../Context/CartContext';
import './Promociones.css';

const Promociones = () => {
   const [promoData, setPromoData] = useState([]);
   const { addToCart } = useContext(cartContext);

   useEffect(() => {
      // Hacer la solicitud GET a promociones.json usando axios
      axios('promociones.json').then((response) => {
         setPromoData(response.data);
      }).catch((error) => {
         console.error('Error al importar datos desde las promociones: ', error);
      });
   }, []);

   return (
      <div className='promociones' id='promociones'>
         {/* Iterar sobre el array de promoData y mostrar cada tarjeta */}
         {promoData.map((item) => (
            <div className='card' key={item.id}>
               <img src={item.img} alt='item-promo-card' />
               <h3>{item.name}</h3>
               <h4>{item.price}</h4>
               <button onClick={() => addToCart(item)}>Agregar al carrito</button>
            </div>
         ))};
      </div>
   );
};

export default Promociones;
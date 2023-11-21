import { createSlice } from '@reduxjs/toolkit';
import producto1 from '../imgproducto/producto1.jpg'
import producto2 from '../imgproducto/producto2.jpg'
import producto3 from '../imgproducto/producto3.jpg'
import producto4 from '../imgproducto/producto4.jpg'
import producto5 from '../imgproducto/producto5.jpg'
import producto6 from '../imgproducto/producto6.jpg'
import producto7 from '../imgproducto/producto7.jpg'
import producto8 from '../imgproducto/producto8.jpg'

const initialState = {
  producto: [
    {
    id:1,titulo: "Producto 1",precio: 65000,imagen: producto1,cantidad:1,total:0,categoria: "motor"
    },
    {
    id:2,titulo: "Producto 2",precio: 80000,imagen: producto2,cantidad:1,total:0,categoria: "motor"
    },
    {
      id:3,titulo: "Producto 3",precio: 10000,imagen: producto3,cantidad:1,total:0,categoria: "exterior"
    },
    {
      id:4,titulo: "Producto 4",precio: 140000,imagen: producto4,cantidad:1,total:0,categoria: "exterior"
    },
    {
      id:5,titulo: "Producto 5",precio: 600000,imagen: producto5,cantidad:1,total:0,categoria: "accesorios"
    },
    {
      id:6,titulo: "Producto 6",precio: 20000,imagen: producto6,cantidad:1,total:0,categoria: "accesorios"
    },
    {id:7,titulo: "Producto 7",precio: 8000,imagen: producto7,cantidad:1,total:0,categoria: "diseño"},
    {id:8,titulo: "Producto 8",precio: 100000,imagen: producto8,cantidad:1,total:0,categoria: "diseño"}
  ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
});

export default cartSlice.reducer;
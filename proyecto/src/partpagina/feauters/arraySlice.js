import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    guardado:[],
    fulTotal:0,
};

const arraySlice = createSlice({
  name: 'guardar',
  initialState,
  reducers: {
    addObjectToArray: (state, action) => {
      state.guardado.push(action.payload);
    },
    increment: (state, action) => {
      const { id } = action.payload;
      const producto = state.guardado.find((prod) => prod.id === id);
      if (producto) {
        producto.cantidad++;
        producto.total=producto.cantidad * producto.precio;
      }
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      const producto = state.guardado.find((prod) => prod.id === id);
      if (producto && producto.cantidad > 0) {
        producto.cantidad--;
        producto.total=producto.cantidad * producto.precio;
      }
    },
    updateTotal: (state, action) => {
      const { id } = action.payload;
      const producto = state.guardado.find((prod) => prod.id === id);
      if (producto) {
        producto.total = producto.cantidad * producto.precio;
      }
    },
    eliminarProducto: (state, action) => {
      const { id } = action.payload;
      state.guardado = state.guardado.filter((producto) => producto.id !== id);
    },
  },
});

export const { addObjectToArray, increment, decrement,updateTotal,eliminarProducto } = arraySlice.actions;
export default arraySlice.reducer;
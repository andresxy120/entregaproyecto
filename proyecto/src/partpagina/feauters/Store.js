import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counterslice';
import cartReducer from './cartslice';
import arrayReducer from './arraySlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    guardar: arrayReducer,
    // Otros reducers pueden ir aquí...
  },
});

export default store;
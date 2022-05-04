import {configureStore} from '@reduxjs/toolkit';
import amountSlice from './screen/food_detail/features/amountSlice';
import indexItemSlice from './screen/home/features/indexItemSlice';
export default configureStore({
  reducer: {
    amount: amountSlice,
    indexItem: indexItemSlice,
  },
});

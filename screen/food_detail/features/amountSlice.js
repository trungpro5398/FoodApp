import {createSlice} from '@reduxjs/toolkit';

import {restaurantData} from '../../../assets/datas/Contant';
const data = restaurantData.map(item => ({
  ...item,
  menu: item.menu.map(x => ({...x, amount: 0})),
}));
export const amountSlice = createSlice({
  name: 'amount',
  initialState: {
    value: data,
  },
  reducers: {
    increaseAmount: (state, action) => {
      const indexRes = state.value.findIndex(
        x => x.name == action.payload.nameRes,
      );
      const indexItem = state.value[indexRes].menu.findIndex(
        x => x.name == action.payload.nameItem,
      );
      state.value[indexRes].menu[indexItem].amount++;
    },
    decreaseAmount: (state, action) => {
      const indexRes = state.value.findIndex(
        x => x.name == action.payload.nameRes,
      );
      const indexItem = state.value[indexRes].menu.findIndex(
        x => x.name == action.payload.nameItem,
      );
      if (state.value[indexRes].menu[indexItem].amount > 0) {
        state.value[indexRes].menu[indexItem].amount--;
      }
    },
  },
});

export const {increaseAmount, decreaseAmount} = amountSlice.actions;

export default amountSlice.reducer;

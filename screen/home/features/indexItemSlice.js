import {createSlice} from '@reduxjs/toolkit';

export const indexItemSlice = createSlice({
  name: 'indexItem',
  initialState: {
    value: null,
  },
  reducers: {
    changeIndex: (state, action) => {
      state.value = action.payload.index;
    },
  },
});
export const {changeIndex} = indexItemSlice.actions;
export default indexItemSlice.reducer;

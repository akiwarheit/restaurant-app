import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'item',
  initialState: [],
  reducers: {
    setItems: (state, {payload}) => payload,
  },
});

export const {setItems} = slice.actions;
export const {reducer: itemReducer} = slice;

import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    setMenus: (state, {payload}) => payload,
  },
});

export const {setMenus} = slice.actions;
export const {reducer: menuReducer} = slice;

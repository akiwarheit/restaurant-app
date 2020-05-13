import {createSlice} from '@reduxjs/toolkit';
import {p} from '../../lib/redux/utils';

const slice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    setMenus: (state, {payload}) => payload,
  },
});

export const {setMenus} = slice.actions;
export const menuReducer = p(slice.reducer, 'menu');

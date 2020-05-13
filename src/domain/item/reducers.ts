import {createSlice} from '@reduxjs/toolkit';
import {p} from '../../lib/redux/utils';

const slice = createSlice({
  name: 'item',
  initialState: [],
  reducers: {
    setItems: (state, {payload}) => payload,
  },
});

export const {setItems} = slice.actions;
export const itemReducer = p(slice.reducer, 'item');

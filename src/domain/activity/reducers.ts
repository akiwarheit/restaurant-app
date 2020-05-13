import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'activity',
  initialState: false,
  reducers: {
    setBusy: (state, {payload}) => payload,
  },
});

export const {setBusy} = slice.actions;
export const {reducer: activityReducer} = slice;

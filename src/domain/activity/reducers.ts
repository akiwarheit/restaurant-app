import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'activity',
  initialState: {
    busy: false,
    error: undefined,
  },
  reducers: {
    setBusy: (state, {payload: busy}) => ({...state, busy}),
    setError: (state, {payload: error}) => ({...state, error}),
  },
});

export const {setBusy, setError} = slice.actions;
export const {reducer: activityReducer} = slice;

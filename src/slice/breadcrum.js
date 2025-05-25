import { createSlice } from '@reduxjs/toolkit'

export const breadcrum = createSlice({
  name: 'bread',
  initialState: {
    prevvalue: null,
    nextvalue: null,
  },
  reducers: {
    breadbutton: (state, action) => {
       if(state.nextvalue !== action.payload){
         state.prevvalue=state.nextvalue
         state.nextvalue=action.payload
       }
    },
   
  },
})


export const {breadbutton} = breadcrum.actions

export default breadcrum.reducer
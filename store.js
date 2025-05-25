import { configureStore } from '@reduxjs/toolkit'
import  breadbutton  from './src/slice/breadcrum'

export default configureStore({
  reducer: {
    bread:breadbutton
  },
})
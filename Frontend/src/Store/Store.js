/* eslint-disable no-unused-vars */
import {configureStore} from '@reduxjs/toolkit'
import ComfyReducer from './CompySlice'
export const Store=configureStore(
    {
        reducer:ComfyReducer
})
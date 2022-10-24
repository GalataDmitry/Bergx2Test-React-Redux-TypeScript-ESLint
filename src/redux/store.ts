import {configureStore} from "@reduxjs/toolkit"
import itemsReducer from "../redux/itemsSlice"

export const store = configureStore({
  reducer: {
    itemsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

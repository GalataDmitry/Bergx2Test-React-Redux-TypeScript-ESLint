import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {ItemsStateType} from "../types/types"
import {fetchItems} from "../functions/fetchItems"
import {AppDispatch} from "./store"

const initialState: ItemsStateType = {
    items: [],
    newItemsArray: [],
    loading: false,
    error: false,
    setError: false
}
export const fetchItemsData = createAsyncThunk(
    "fetchItemsData",
    (dispatch: AppDispatch) => fetchItems(dispatch)
)

export const itemsSlice = createSlice({
    name: "items_slice",
    initialState,
    reducers: {
        setNewItemsArrayData: (state, action) => {
            state.newItemsArray = action.payload
        },
        setError: (state) => {
            state.setError = true
            state.error = true
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsData.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchItemsData.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.items = action.payload
                if (state.setError) state.error = true
            })
            .addCase(fetchItemsData.rejected, (state) => {
                state.loading = false
                state.error = true
            })
    }
})

export const {setNewItemsArrayData, setError} = itemsSlice.actions
export default itemsSlice.reducer

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {ItemsStateType} from "../types/types"
import {fetchItems} from "../functions/fetchItems"

const initialState: ItemsStateType = {
    items: [],
    newItemsArray: [],
    loading: false,
    error: false,
}
export const fetchItemsData = createAsyncThunk(
    "fetchItemsData",
    (_, thunkApi) => {
        try {
           return fetchItems()
        } catch (e) {
            return thunkApi.rejectWithValue(_)
        }
    }
)

export const itemsSlice = createSlice({
    name: "items_slice",
    initialState,
    reducers: {
        setNewItemsArrayData: (state, action) => {
            state.newItemsArray = action.payload
        }
    },
    extraReducers: {
            [fetchItemsData.pending.type]: (state) => {
                state.loading = true
                state.error = false
            },
            [fetchItemsData.fulfilled.type]:(state, action) => {
                state.loading = false
                state.error = false
                state.items = action.payload
            },
            [fetchItemsData.rejected.type]: (state) => {
                state.loading = false
                state.error = true
            }
    }
})

export const {setNewItemsArrayData} = itemsSlice.actions
export default itemsSlice.reducer

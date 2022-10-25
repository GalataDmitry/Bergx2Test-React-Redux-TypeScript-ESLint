import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../redux/hooks"
import App from "./App"
import {fetchItemsData} from "../redux/itemsSlice"
import {updateItemsFunction} from "../functions/updateItemsFunction"

const AppContainer = () => {

    const dispatch = useAppDispatch()
    const items = useAppSelector(state => state.itemsReducer.items)
    const newItemsArray = useAppSelector(state => state.itemsReducer.newItemsArray)
    const loading = useAppSelector(state => state.itemsReducer.loading)
    const error = useAppSelector(state => state.itemsReducer.error)
    console.log('items', items)
    console.log('newItemsArray', newItemsArray)

    useEffect(() => {
        dispatch(fetchItemsData())
    }, [])

    useEffect(() => {
        updateItemsFunction({items}, dispatch)
    }, [items])

    return <App
        items={items}
        newItemsArray={newItemsArray}
        loading={loading}
        error={error}
    />
}

export default AppContainer
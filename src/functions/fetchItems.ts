import {URL} from "../config/urlConfig"
import {AppDispatch} from "../redux/store"
import {setError} from "../redux/itemsSlice"


export const fetchItems = (dispatch: AppDispatch) => {
    return fetch(URL)
        .then(response => response.json())
        .then(result => result)
        .catch(error => {
            console.log("fetchItems error -->", error)
            dispatch(setError())
        })
}
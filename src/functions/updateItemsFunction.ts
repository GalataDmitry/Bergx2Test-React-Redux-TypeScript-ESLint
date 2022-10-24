import {ItemsStateType, NewItemsArrayType, RemoveElementsType} from "../types/types"
import {setNewItemsArrayData} from "../redux/itemsSlice"
import {AppDispatch} from "../redux/store"

export const updateItemsFunction = (data: ItemsStateType, dispatch: AppDispatch) => {
    let newItemsArray: NewItemsArrayType[] = []
    const removeElements: RemoveElementsType[] = []
    for (let i = 0; i < data.items!.length; i++) {
        newItemsArray.push(data.items![i])
        const idx = data.items!.findIndex((el) => el.id === data.items![i].parent_id)
        newItemsArray[idx] = Object.assign({...newItemsArray[idx]}, {"children": []})
    }
    for (let i = 0; i < newItemsArray.length; i++) {
        for (let j = 0; j < newItemsArray.length; j++) {
            if (newItemsArray[i].id === newItemsArray[j].parent_id) {
                newItemsArray[i].children?.push(newItemsArray[j])
                removeElements.push(newItemsArray.find((el) => el.id === newItemsArray[j].id) as RemoveElementsType)
            }
        }
    }
    for (let i = 0; i < removeElements.length; i++)
        newItemsArray = newItemsArray.filter((el) => el.id !== removeElements[i].id)
    return dispatch(setNewItemsArrayData(newItemsArray))
}
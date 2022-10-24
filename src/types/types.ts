export interface NewItemsArrayType {
    id?: number
    label?: string
    parent_id?: number
    children?: [{
        id?: number
        label?: string
        parent_id?: number
        children?: [{
            id?: number
            label?: string
            parent_id?: number
        }]
    }]
}

export interface RemoveElementsType {
    id: number
    label: string
    parent_id: number
    children: [{
        id: number
        label: string
        parent_id: number
    }]
}

export interface ItemsStateType {
    items?: [{
        id?: number
        label?: string
        parent_id?: number
        children?: [{
            id?: number
            label?: string
            parent_id?: number
        }]
    }] | []
    newItemsArray?: [{
        id?: number
        label?: string
        parent_id?: number
        children?: [{
            id?: number
            label?: string
            parent_id?: number
            children?: [{
                id?: number
                label?: string
                parent_id?: number
            }]
        }]
    }] | []
    loading?: boolean
    error?: boolean
    setError?: boolean
}


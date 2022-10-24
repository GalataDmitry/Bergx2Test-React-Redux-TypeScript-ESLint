import React, {FC} from "react"
import {v4} from "uuid"
import {ItemsStateType} from "../types/types"
import ErrorPage from "./ErrorPage"
import LoadingPage from "./LoadingPage"

const App: FC<ItemsStateType> = ({items, newItemsArray, loading, error}) => {

    if (loading) return <LoadingPage/>
    if (error) return <ErrorPage/>
    return <div>
        <ul> {items?.map(el => (
            <li key={v4()}>
                {el.label}
            </li>
        ))}
        </ul>
        <ul> {newItemsArray?.map(item => (
            <li key={v4()}>
                <> {item.label}
                    {item.children?.map(el => (
                        <li key={v4()}>
                            <> {el.label}
                                {el.children?.map(el => (
                                    <li key={v4()}>
                                        {el.label}
                                    </li>
                                ))}
                            </>
                        </li>
                    ))}
                </>
            </li>
        ))}
        </ul>
    </div>
}

export default App

import {URL} from "../config/urlConfig"

export const fetchItems = () => {
    return fetch(URL)
        .then(response => response.json())
        .then(result => result)
}
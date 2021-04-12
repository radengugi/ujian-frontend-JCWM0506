import axios from "axios"
import { URL_API } from '../helper'

export const getProductAction = () => {
    return (dispatch) => {
        axios.get(URL_API + `/products`)
            .then(res => {
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// export const getProductAction = (data) =>{
//     return{
//         type: "GET_PRODUCTS",
//         payload: data
//     }
// }

export const sortProducts = (data) => {
    return {
        type: "SORT_PRODUCTS",
        payload: data
    }
}
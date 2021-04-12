// import axios from "axios"
// import { URL_API } from "../helper"

// export const authLogin = (email, password) => {
//     return (dispatch) => {
//         axios.get(URL_API + `/users?email=${email}&password=${password}`)
//             .then(res => {
//                 if (res.data.length > 0) {
//                     dispatch({ type: "LOGIN_SUCCESS", payload: res.data[0] })
//                     localStorage.setItem('tkn_id', res.data[0].id)
//                 } else {
//                     this.setState({ alert: !this.state.alert, message: 'Account Not Available !', alertType: 'warning' })
//                 }
//             })
//             .catch(err => {
//                 console.log('LOGIN error :', err)
//             })
//     }
// }

export const authLogin = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}

export const authLogout = () => {
    localStorage.removeItem('tkn_id')
    return {
        type: "LOGOUT"
    }
}

export const keepLogin = (data) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
}
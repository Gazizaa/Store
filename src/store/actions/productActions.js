import {GET_PRODUCTS, GET_ERRORS, GET_PRODUCT_DETAILS} from './types'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios.get('/products').then(
        response => {
            return dispatch ({
                type: GET_PRODUCTS,
                payload: response.data
            })
        }
    ).catch(err => {
        console.log(err)
        return dispatch({
            type: GET_ERRORS,
            payload: err
        })
    })
}

export const getProductDetails = (id) => dispatch => {
    axios.get('/products/'+id).then(
        response => {
            return dispatch ({
                type: GET_PRODUCT_DETAILS,
                payload: response.data
            })
        }
    ).catch(err => {
        console.log(err)
        return dispatch({
            type: GET_ERRORS,
            payload: err
        })
    })
}
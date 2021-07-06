import {ADD_TO_BASKET, GET_ERRORS, DELETE_BASKET, CHANGE_AMOUNT} from './types'
import axios from 'axios'

export const addToBasket = (data) => dispatch => {
    axios.post('http://localhost:3000/basket', data).then(
        response => {
            return dispatch ({
                type: ADD_TO_BASKET,
                payload: response.data
            })
        }
    ).catch(err => {
        return dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
}

export const changeAmount = (id, value) => {
    return {
        type: CHANGE_AMOUNT,
        payload: {
            id: id,
            amount: value
        }
    }
}

export const deleteBasket = (productId) => {
    return {
        type: DELETE_BASKET,
        payload: {
            id: productId
        }
    }
}

/* export const getBasket = () => dispatch => {
    axios.get('http://localhost:3000/basket').then(
        response => {
           console.log(response)
        }
    ).catch(err => {
        return dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    })
} */
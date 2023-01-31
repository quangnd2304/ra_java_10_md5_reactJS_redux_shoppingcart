import * as types from "../constants/actionTypes";
export const act_buy_product = (product, quantity) => {
    return {
        type: types.BUY_PRODUCT,
        payload: {
            product,
            quantity
        }
    }
}
export const act_update_cart = (product, quantity) => {
    return {
        type: types.UPDATE_CART,
        payload: {
            product, quantity
        }
    }
}
export const act_delete_cart = (productId) => {
    return {
        type: types.DELETE_CART,
        payload: productId
    }
}
export const act_change_Notify = (message) => {
    return {
        type: types.CHANGE_NOTIFY,
        payload: message
    }
}
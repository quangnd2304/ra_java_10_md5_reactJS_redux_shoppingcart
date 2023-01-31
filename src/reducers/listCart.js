import { SHOPPING_CART_NAME } from "../constants/shoppingCart";
import { BUY_PRODUCT, UPDATE_CART, DELETE_CART } from "../constants/actionTypes";

let initialState = [];
let carts = JSON.parse(localStorage.getItem(SHOPPING_CART_NAME));
initialState = (carts != null && carts.length > 0) ? carts : initialState;
const getIndexCart = (productId, listCarts) => {
    console.log("List Cart-->", listCarts);
    for (let i = 0; i < listCarts.length; i++) {
        if (listCarts[i].product.productId == productId) {
            return i;
        }
    }
    return -1;
}
const listCart = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT:
            let cartNew = { product: action.payload.product, quantity: action.payload.quantity };
            let index = getIndexCart(action.payload.product.productId, state);
            if (index >= 0) {
                // Da ton tai san pham trong gio hang
                // state[index].quantity += parseInt(action.payload.quantity);
                state = state.map(cart => {
                    if (cart.product.productId == action.payload.product.productId) {
                        return { product: cart.product, quantity: parseInt(cart.quantity) + parseInt(action.payload.quantity) };
                    } else {
                        return cart;
                    }
                });
            } else {
                // Chua ton tai san pham trong gio hang
                state = [...state, cartNew];
            }
            localStorage.setItem(SHOPPING_CART_NAME, JSON.stringify(state));
            return state;
        case UPDATE_CART:
            state = state.map(cart => {
                if (cart.product.productId == action.payload.product.productId) {
                    return action.payload;
                } else {
                    return cart;
                }
            });
            localStorage.setItem(SHOPPING_CART_NAME, JSON.stringify(state));
            return state;
        case DELETE_CART:
            state = state.filter(cart => {
                if (cart.product.productId != action.payload) {
                    return cart;
                }
            })
            localStorage.setItem(SHOPPING_CART_NAME, JSON.stringify(state));
            return state;
        default:
            return state;
    }

}
export default listCart;
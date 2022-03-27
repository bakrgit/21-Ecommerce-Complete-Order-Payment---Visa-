import { ADD_TO_CART, APPALY_COUPON_CART, UPDATE_ITEM_FROMCART, GET_ALL_USER_CART, DELETE_ITEM_FROMCART, CLEAR_ALL_USER_CART } from '../type'

const inital = {
    addToCart: [],
    getAllUserCart: [],
    clearCart: [],
    deleteItem: [],
    updateItem: [],
    applayCoupon: [],
}
const cartReducer = (state = inital, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addToCart: action.payload,
            }
        case GET_ALL_USER_CART:
            return {
                ...state,
                getAllUserCart: action.payload,
            }
        case CLEAR_ALL_USER_CART:
            return {
                ...state,
                clearCart: action.payload,
            }
        case DELETE_ITEM_FROMCART:
            return {
                ...state,
                deleteItem: action.payload,
            }
        case UPDATE_ITEM_FROMCART:
            return {
                ...state,
                updateItem: action.payload,
            }
        case APPALY_COUPON_CART:
            return {
                ...state,
                applayCoupon: action.payload,
            }
        default:
            return state;
    }
}
export default cartReducer
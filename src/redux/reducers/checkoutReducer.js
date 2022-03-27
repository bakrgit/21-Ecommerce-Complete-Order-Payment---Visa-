import { CREATE_ORDER_CASH, CREATE_ORDER_CRAD } from '../type'

const inital = {
    createOrderCash: [],
    createOrderCard: [],
}
const checkoutReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_ORDER_CASH:
            return {
                ...state,
                createOrderCash: action.payload,
            }
        case CREATE_ORDER_CRAD:
            return {
                ...state,
                createOrderCard: action.payload,
            }
        default:
            return state;
    }
}
export default checkoutReducer
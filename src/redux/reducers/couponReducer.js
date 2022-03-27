import { ADD_COUPON, EDIT_COUPON, GET_ALL_COUPON, GET_ONE_COUPON, DELTET_COUPON } from '../type'

const inital = {
    addCoupon: [],
    allCoupon: [],
    deleteCoupon: [],
    oneCoupon: [],
    editCoupon: [],
}
const couponReducer = (state = inital, action) => {
    switch (action.type) {
        case ADD_COUPON:
            return {
                ...state,
                addCoupon: action.payload,
            }
        case GET_ALL_COUPON:
            return {
                ...state,
                allCoupon: action.payload,
            }
        case DELTET_COUPON:
            return {
                ...state,
                deleteCoupon: action.payload,
            }
        case GET_ONE_COUPON:
            return {
                ...state,
                oneCoupon: action.payload,
            }
        case EDIT_COUPON:
            return {
                ...state,
                editCoupon: action.payload,
            }
        default:
            return state;
    }
}

export default couponReducer
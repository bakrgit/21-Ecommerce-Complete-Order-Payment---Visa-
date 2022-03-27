import { DELETE_PRODUCTS, GET_ALL_PRODUCTS_BRAND, GET_ALL_PRODUCTS_CATEGORY, UPDATE_PRODUCTS, CREATE_PRODUCTS, GET_PRODUCT_LIKE, GET_PRODUCT_DETALIS, GET_ALL_PRODUCTS, GET_ERROR } from '../type'

const inital = {
    products: [],
    allProducts: [],
    oneProduct: [],
    productLike: [],
    deleteProducts: [],
    updateProducts: [],
    allProductCat: [],
    allProductBrand: [],
    loading: true,
}
const productsReducer = (state = inital, action) => {
    switch (action.type) {
        case CREATE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
            }
        case GET_PRODUCT_DETALIS:
            return {
                oneProduct: action.payload,
                loading: false,
            }
        case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false,
            }
        case DELETE_PRODUCTS:
            return {
                ...state,
                deleteProducts: action.payload,
                loading: false,
            }
        case UPDATE_PRODUCTS:
            return {
                ...state,
                updateProducts: action.payload,
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                products: action.payload,
            }
        case GET_ALL_PRODUCTS_CATEGORY:
            return {
                loading: true,
                allProductCat: action.payload,
            }
        case GET_ALL_PRODUCTS_BRAND:
            return {
                loading: true,
                allProductBrand: action.payload,
            }

        default:
            return state;
    }
}
export default productsReducer
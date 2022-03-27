import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsSearch } from '../../redux/actions/productsAction';
import { getAllProductsPage } from './../../redux/actions/productsAction';

const ViewSearchProductsHook = () => {
    let limit = 8;
    const dispatch = useDispatch();

    const getProduct = async () => {
        getStorge();
        sortData();

        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`))
    }
    useEffect(() => {
        getProduct()
    }, [])

    const allProducts = useSelector((state) => state.allproducts.allProducts)

    let items = []; let pagination = []; let results = 0;
    try {
        if (allProducts.data)
            items = allProducts.data;
        else
            items = []
    } catch (e) { }
    try {
        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }
    try {
        if (allProducts.results)
            results = allProducts.results;
        else
            results = 0
    } catch (e) { }

    //when click pagination
    const onPress = async (page) => {
        getStorge();
        sortData();
        await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${brandCat}${pricefromString}${priceToString}`))
    }
    let pricefromString = "", priceToString = ""
    let word = "", queryCat = "", brandCat = "", priceTo = "", priceFrom = "";
    const getStorge = () => {
        if (localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord")
        if (localStorage.getItem("catCecked") != null)
            queryCat = localStorage.getItem("catCecked")
        if (localStorage.getItem("brandCecked") != null)
            brandCat = localStorage.getItem("brandCecked")
        if (localStorage.getItem("priceTo") != null)
            priceTo = localStorage.getItem("priceTo")
        if (localStorage.getItem("priceFrom") != null)
            priceFrom = localStorage.getItem("priceFrom")

        if (priceFrom === "" || priceFrom <= 0) {
            pricefromString = ""
        } else {
            pricefromString = `&price[gt]=${priceFrom}`
        }

        if (priceTo === "" || priceTo <= 0) {
            priceToString = ""
        } else {
            priceToString = `&price[lte]=${priceTo}`
        }
    }

    let sortType = "", sort;
    ///when user choose sort type
    const sortData = () => {
        if (localStorage.getItem("sortType") !== null) {
            sortType = localStorage.getItem("sortType")
        } else {
            sortType = "";
        }

        if (sortType === "السعر من الاقل للاعلي")
            sort = "+price"
        else if (sortType === "السعر من الاعلي للاقل")
            sort = "-price"
        else if (sortType === "")
            sort = ""
        else if (sortType === "الاكثر مبيعا")
            sort = "-sold"
        else if (sortType === "الاعلي تقييما")
            sort = "-quantity"

    }



    return [items, pagination, onPress, getProduct, results]

}

export default ViewSearchProductsHook
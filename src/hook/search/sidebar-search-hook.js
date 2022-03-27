import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from './../../redux/actions/brandAction';
import ViewSearchProductsHook from './../products/view-search-products-hook';

const SidebarSearchHook = () => {
    const [items, pagination, onPress, getProduct, results] = ViewSearchProductsHook();
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        const get = async () => {
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        get();
    }, [])

    //to get state from redux
    const allCat = useSelector(state => state.allCategory.category)
    //to get state from redux
    const allBrand = useSelector(state => state.allBrand.brand)

    //to get category
    let category = [];
    try {
        if (allCat.data)
            category = allCat.data
    } catch (e) { }
    //to get category
    let brand = [];
    try {
        if (allBrand.data)
            brand = allBrand.data
    } catch (e) { }
    var queryCat = "", queryBrand = "";
    const [catChecked, setCatChecked] = useState([])
    //when user press any category
    const clickCategory = (e) => {
        let value = e.target.value
        if (value === "0") {
            setCatChecked([])
        }
        else {
            if (e.target.checked === true) {
                setCatChecked([...catChecked, value])
            } else if (e.target.checked === false) {
                const newArry = catChecked.filter((e) => e !== value)
                setCatChecked(newArry)
            }
        }

    }
    useEffect(() => {
        queryCat = catChecked.map(val => "category[in][]=" + val).join("&")
        localStorage.setItem("catCecked", queryCat)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [catChecked])


    const [brandChecked, setBrandChecked] = useState([])
    //when user press any category
    const clickBrand = (e) => {
        let value = e.target.value
        if (value === "0") {
            setBrandChecked([])
        }
        else {
            if (e.target.checked === true) {
                setBrandChecked([...brandChecked, value])
            } else if (e.target.checked === false) {
                const newArry = brandChecked.filter((e) => e !== value)
                setBrandChecked(newArry)
            }
        }
    }

    useEffect(() => {
        queryBrand = brandChecked.map(val => "brand[in][]=" + val).join("&")
        localStorage.setItem("brandCecked", queryBrand)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [brandChecked])

    const [From, setPriceFrom] = useState(0)
    const [To, setToFrom] = useState(0)

    const priceFrom = (e) => {
        localStorage.setItem("priceFrom", e.target.value)

        setPriceFrom(e.target.value)
    }
    const priceTo = (e) => {
        localStorage.setItem("priceTo", e.target.value)
        setToFrom(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [From, To])




    return [category, brand, clickCategory, clickBrand, priceFrom, priceTo]

}

export default SidebarSearchHook
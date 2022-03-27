import React, { useEffect } from 'react';
import baseUrl from '../../Api/baseURL';
import { useSelector, useDispatch } from 'react-redux'
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction'

const AllBrandHook = () => {
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        dispatch(getAllBrand(4));
    }, [])

    //to get state from redux
    const brand = useSelector(state => state.allBrand.brand)
    const loading = useSelector(state => state.allBrand.loading)


    //to get page count
    let pageCount = 0;
    if (brand.paginationResult)
        pageCount = brand.paginationResult.numberOfPages

    //when press pagination
    const getPage = (page) => {
        dispatch(getAllBrandPage(page));
        console.log(page)
    }

    return [brand, loading, pageCount, getPage]
};

export default AllBrandHook;

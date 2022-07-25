import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    createProduct,
    updateProduct,
    deleteProduct
} from '../actions/Product'

export default function Product() {

    const dispacth = useDispatch()

    const lisdata = []// useSelector((state) => state.products.value)
    const [value, setValue] = useState({

    });
    return (<>



    </>)

}

import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: 'products',
    initialState: { value: [] },
    reducers: {
        createProduct: (state, action) => {

        },
        updateProduct: (state, action) => {

        },
        deleteProduct: (state, action) => {

        }
    }
})


export const {
    createProduct,
    updateProduct,
    deleteProduct } = productSlice.actions

export default productSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const   initialState={
    products:[],
    searchTerms:'',
    FilteredData:[],

}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProducts(state, action){
            state.products=action.payload

        },
        setSearchProduct(state, action){
            state.searchTerms=action.payload;
            state.FilteredData=state.products.filter(product=>product.name.toLowerCase().includes(state.searchTerms.toLowerCase()))
         
        }
    }
    
})

 export const {setProducts, setSearchProduct }= productSlice.actions
export default productSlice.reducer
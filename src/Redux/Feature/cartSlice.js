import { createSlice } from "@reduxjs/toolkit";

const   initialState={
    products:[],
    totalQuantity:0,
    totalPrice:0,

}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

     addToCart(state, action){
        const newItems=action.payload;
        console.log("new action", action);
        console.log("new item", newItems);
        const itemIndex=state.products.find(item=>item.id==newItems.id)
        console.log("itemindex", itemIndex);
        if(itemIndex){
            itemIndex.quantity++;
            itemIndex.totalPrice += newItems.price

        }else{
            state.products.push({
                id:newItems.id,
                name:newItems.name,
                price:newItems.price,
                quantity:1,
                totalPrice:newItems.price,
                image:newItems.image
            })
        }
        state.totalPrice+=newItems.price;
        state.totalQuantity++;
       
       
     }, 
     

     removeFromCart(state,action){
        const id=action.payload;
        const findItem=state.products.find(item=>item.id==id)
        if(findItem){
            state.totalPrice-=findItem.price,
            state.totalQuantity-=findItem.quantity
            state.products=state.products.filter(item=>item.id!==id)
        }
     },

     increaseQuantity(state, action){
        const id =action.payload;
        const findItem=state.products.find(item=>item.id===id)
        if(findItem){
            findItem.quantity++;
            findItem.totalPrice+=findItem.price
            state.totalPrice+= findItem.price
            state.totalQuantity++;
        }

     },
     decreaseQuantity(state, action){
        const id =action.payload;
       
        const findItem=state.products.find(item=>item.id==id)
        if(findItem){
            if(findItem.quantity>1){
            findItem.quantity--;
            findItem.totalPrice-=findItem.price
            state.totalPrice-= findItem.price
            state.totalQuantity--;
        } 
        }

     }
    }
    
})

 export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity }= cartSlice.actions
export default cartSlice.reducer



import { createSlice } from "@reduxjs/toolkit";


export let productSlice =  createSlice({
    name:'productSlice',


    initialState:{
        city:'FSD',
        amonut:34324234,
        cart:[],
        ads:[
            {
                name:'apple'
            },
            {
                name:'banana'
            },
            {
                name:'carrot'
            }
        ]
    },
    reducers:{

        increase:(puranaData, nyaData)=>{
            let item =  puranaData.cart.find(function(cartItem){
                return cartItem.id == nyaData.payload;
            })

            item.qty++;

        },

        decrease:(puranaData, nyaData)=>{
            let item =  puranaData.cart.find(function(cartItem){
                return cartItem.id == nyaData.payload;
            })

            item.qty--;
        },

        removeFromCart:(puranaData, nyaData)=>{
            puranaData.cart =  puranaData.cart.filter(function(cartItem){
                return cartItem.id != nyaData.payload;
            })
        },

        addItemToCart:(puranaData, nyaData)=>{
            nyaData.payload.qty = 1;
            puranaData.cart.push(nyaData.payload)
        },

        
        addProduct:(puranaData, nyaData)=>{

            

            puranaData.ads.push({
                name:nyaData.payload
            })

            console.log('data agya');
            console.log(nyaData.payload)

        },
        removeProduct:(puranaData, nyaData)=>{
            puranaData.ads.splice(nyaData.payload, 1);
        },
    
    }

});

export const { increase, decrease, removeFromCart, addItemToCart, addProduct, removeProduct} = productSlice.actions;
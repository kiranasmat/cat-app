// slice means section


import { createSlice } from "@reduxjs/toolkit";


export let userSlice =  createSlice({
    name:'userSlice',

    // initial data
    initialState:{
        users:[
            {
                name:'ali',
                password:123
            }
        ],
    loggedWalaUser:null
    },
    reducers:{
        loginHogya:(puranaData, nyData)=>{
            puranaData.loggedWalaUser = nyData.payload;
        },
        addUser:(puranaData, nyData)=>{
            puranaData.users.push(nyData.payload);
        }
    }
});

export let {addUser, loginHogya} = userSlice.actions
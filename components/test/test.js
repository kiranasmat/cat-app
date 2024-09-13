"use client";

import { addProduct, removeProduct } from "@/store/productSlice";
import { meraStore } from "@/store/store"
import { removeData } from "jquery";
import { Provider, useDispatch, useSelector } from "react-redux"

// react-redux

export default function TestPage(){

    return  <Provider store={meraStore}>

        
        <Test></Test>
    </Provider>

}


function Test(){

    let disptch = useDispatch();

    // jise component ne store se data mngwana
    // use useSelctor() lgana hoga
    let abc =  useSelector(function(store){
        return store.productSlice.ads
    });

    let userKaName =  useSelector(function(store){
        return store.userSlice.user?.name;
    });

    const sendData = ()=>{

        let neName =  prompt("Enter name");

        disptch( addProduct(neName) );

    }

    return <div>

        <button onClick={sendData}>Send Data</button>

        <h1>{userKaName}</h1>
        <ol>
            {
                abc.map((product, meraIndex)=>{
                    return <li key={meraIndex} onClick={()=>{
                        disptch(removeProduct(meraIndex));
                    }}>{product.name}</li>
                })
            }
        </ol>

    </div>

}
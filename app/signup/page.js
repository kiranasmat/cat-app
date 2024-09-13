"use client";
import ReduxProvider from "@/components/reduxProvider/reduxProvider";
import { meraStore } from "@/store/store";
import { addUser } from "@/store/userSlice";
import { useRef } from "react";
import {  useDispatch } from "react-redux";

export default function Page(){
    return <ReduxProvider>
            <Signup></Signup>
        </ReduxProvider>
}

 function Signup(){

    let dispatch = useDispatch();

    let i1 = useRef();
    let i2 = useRef();
    
    const saveData = (evt)=>{

        evt.preventDefault();

        let user = {
            name:i1.current.value,
            password:i2.current.value
        }

        dispatch( addUser(user)  );

    }

    return <div>
        <form onSubmit={saveData}>
            <input ref={i1} /><br />
            <input ref={i2} /><br />
            <button>SUbmit</button>
        </form>
    </div>
}
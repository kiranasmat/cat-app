"use client";
import  CardWalaComponent from "@/components/card/card";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";


export default function Page(){

  let [products, setProducts] = useState([]);

  useEffect(()=>{

    axios.get('https://fakestoreapi.com/products')
    .then(function(resp){
      console.log(resp.data)
      setProducts(resp.data);
    })
    .catch(function(){
      alert('some malsa hogya')
    });

  }, []);

  let item = useRef();

const sendData = ()=>{
// REST API kay siraf POST aur PUT m data send kia jasakta

  let some = new FormData();

  some.append("action", "signup");
  some.append("name", "ali");
  some.append("password", "abc");
  
  some.append("file", item.current.files[0])


  axios.post('/api/auth', some).then((resp)=>{


    console.log(resp.data);
  }).catch((err)=>{
    console.log('error agya');
  })

}

  return <>
  <input multiple type="file" ref={item} />
  <button onClick={sendData}>Send data</button>
  <div style={ { justifyContent:'space-around', display:'flex', flexWrap:'wrap'} }>
      {
        products.map(function(product, i){
          return <CardWalaComponent key={i} ad={product}></CardWalaComponent>
        })
      }
  </div>
  </>

}
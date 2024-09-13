"use client";
import  CardWalaComponent  from "@/components/card/card"

export default function CreateAd(){

  let ads = [
    {
      name:'VIVO 10',
      price:10
    },
    {
      name:'VIVO 11',
      price:14
    },
    {
      name:'VIVO 12',
      price:15
    }
  ]

  return <div>

        <div style={ {display:'flex'} }>
          {
            ads.map(function(ad, i){
                return <CardWalaComponent key={i} ad={ad}></CardWalaComponent>
            })
          }
</div>

  </div>

}
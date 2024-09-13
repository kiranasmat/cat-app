"use client";
// "use client" means is component ko hum browser m execute krna chahte hn
// "use client" waley component kay content ki SEO is not good 


// plus points of Next
// NextJS =  React + NodeJS

// better SEO
// Integrated Nodejs Server
// Serverless function

import { ads } from "@/app/data"
import Image from "next/image";

export default function Home() {


  debugger;

    
    return <div>
  
      {/* <ol>
        {
          names.map(function(name){
            return <li>{name}</li>
          })
        }
      </ol> */}
  
      <div className="add-container">  
        {
          // map ka funciton react m array se UI generate krne kelue use hota h
          ads.map(function (ad, i) {
            return <div key={i} className="ad">
              <Image src={ad.pic} width="100" height="100" />
              {ad.name}
            </div>
          })
        }
      </div>
  
    </div>
  
  }
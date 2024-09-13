

"use client";

import { useParams } from "next/navigation"
import { ads } from "@/app/data";

export default function Search(){

    let params = useParams();

    return <div>
             <div className="add-container">
  
  {
    // map ka funciton react m array se UI generate krne kelue use hota h
    ads.filter(function(ad){

        if(ad.name.includes(params.name)){
            return true;
        }

    }).map(function (ad, i) {
      return <div key={i} className="ad">
        {ad.name}
      </div>
    })
  }
</div>
    </div>

}
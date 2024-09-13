"use client";
import { useParams } from 'next/navigation';
import './style.css';
import { useEffect, useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import axios from 'axios';

export default function Page(){

    let [ad, setAd] = useState({rating:{}});

    let params = useParams()
    

    useEffect(()=>{

        axios.get('https://fakestoreapi.com/products/' +params.pid ).then((resp)=>{

            console.log(resp.data)
            setAd(resp.data);

        })

    }, [])

    console.log(params);

return 	<div class="container">
<div>
    <div id="details-page" class="container-fliud">
        <div class="wrapper row">
            <div class="preview col-md-6">
                
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    
                  <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>          
          <TransformComponent>
            <img src={ad.image} alt="test" />
            
          </TransformComponent>
        </>
      )}
    </TransformWrapper>

                    </div>                  
                </div>
                <ul class="preview-thumbnail nav nav-tabs">
                  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                </ul>
                
            </div>
            <div class="details col-md-6">
                <h3 class="product-title">{ad.title}</h3>
                <div class="rating">
                    <div class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no">{ad.rating.count} reviews</span>
                </div>
                <p class="product-description">{ad.description}</p>
                <h4 class="price">current price: <span>{ad.price}</span></h4>
                <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <h5 class="sizes">sizes:
                    <span class="size" data-toggle="tooltip" title="small">s</span>
                    <span class="size" data-toggle="tooltip" title="medium">m</span>
                    <span class="size" data-toggle="tooltip" title="large">l</span>
                    <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5>
                <h5 class="colors">colors:
                    <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                    <span class="color green"></span>
                    <span class="color blue"></span>
                </h5>
                <div class="action">
                    <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                    <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

}
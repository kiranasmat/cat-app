
import Link from 'next/link';
import './card.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@/store/productSlice';
import ReduxProvider from '../reduxProvider/reduxProvider';

export default function Card({ad}){


    return <ReduxProvider>
        <CardWalaComponent ad={ad}></CardWalaComponent>
    </ReduxProvider>

}

                                // props
function CardWalaComponent({ad}){
    
    let dispatch = useDispatch();

    return <div className="card">
        <Link href={"/products/"+ad.id}>
            <img  src={ad.image} alt="" />
            {/* <h4>{name}</h4> */}
            <h5>{ad.name}</h5>
            <span>{ad.price}</span>
            <p>{ad.description}</p>
        </Link>
        <button onClick={()=>{

            dispatch( addItemToCart(ad) )

        }} className='btn btn-primary'>Add to Cart</button>
      </div>
  
  }
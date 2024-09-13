"use client"
import ReduxProvider from "@/components/reduxProvider/reduxProvider";
import { decrease, increase, removeFromCart } from "@/store/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Page(){
    return <ReduxProvider>
        <Cart></Cart>
    </ReduxProvider>
}

function Cart(){

    let dispatch = useDispatch();

    let items = useSelector(function(store){
        return store.productSlice.cart;
    });

    let total = 0;

    items.forEach(function(item){
            total += item.price * item.qty; 
    })

    return <div>
       {items.length ? <table style={ {width:'100%'} }>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((cartItem, i)=>{
                        return <tr key={i}>
                            <td><img width={100} src={cartItem.image} /></td>
                            <td>{cartItem.title}</td>
                            <td>{cartItem.price}</td>
                            <td>{cartItem.qty}</td>
                            <td>{ Math.round(cartItem.price * cartItem.qty)}</td>
                            <td>
                                
                                <button onClick={()=>{
                                    dispatch( increase(cartItem.id) ) 
                                }}>+</button>
                                
                                <button onClick={()=>{
                                    dispatch( decrease(cartItem.id) ) 
                                }}>-</button>


                            </td>
                            <td>
                                <button onClick={()=>{

                                dispatch( removeFromCart(cartItem.id) )

                                }}>X</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <th>
                        <h4>
                            Total Bill
                        </h4>
                        </th>
                    <th>
                        <h4>
                            { Math.round(total)}
                        </h4>
                        </th>
                </tr>
            </tfoot>
        </table>:

            <div>
                <h4 style={ {textAlign:'center'}} >The Cart is empty, keep shopping!</h4>
                </div>

        }
    </div>

}
import axios from "axios";
import { useEffect, useState } from "react"

export default()=>{
let [users,setUsers]=useState([]);
useEffect(()=>{
    axios.post('api/auth',{action:'user-lao'}).then((resp)=>{
console.log(resp.data)
setUsers(resp.data.users)
    })
},[])
return <>
        <table>
            {
              users.map((user, i)=>{
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.password}</td>
                </tr>
              })  
            }
        </table>
    </>



}
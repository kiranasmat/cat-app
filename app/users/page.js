"use client";
import ReduxProvider from "@/components/reduxProvider/reduxProvider";
import { useSelector } from "react-redux"

export default function Page(){

    return <ReduxProvider>
            <Users></Users>
    </ReduxProvider>

}


function Users(){

    let users = useSelector(function(store){
        return store.userSlice.users;
    })

    return <div>

        <table>
            {
                users.map((user, i)=>{
                    return <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                    </tr>
                })
            }
        </table>

    </div>

}
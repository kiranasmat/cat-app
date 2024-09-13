"use client"
import Link from "next/link"
import './header.css';
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReduxProvider from "../reduxProvider/reduxProvider";
import { loginHogya } from "@/store/userSlice";
export let name = 'ali'

export function Header(){

  return <ReduxProvider>
      <Component></Component>
  </ReduxProvider>

}


 function Component(){

  let dispatch = useDispatch();

  // agar JS kay function m route chagne karno h to useRouter() lagega
  let router = useRouter();

  let user = useSelector(function(store){
    return store.userSlice.loggedWalaUser
  })


  let inputRef = useRef();

  const searchAd = ()=>{

    router.push('/search/'+inputRef.current.value)

  }

    return  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" href="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
        {user ? <span>Welcome, <b>{user.name}</b></span> : null}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          {!user ?<li className="nav-item">
            <Link className="nav-link" href="/signup">Signup</Link>
          </li> : null}
          
          {user ? 
          <>
            <li className="nav-item">
              <Link onClick={()=>{
                dispatch( loginHogya(null) )
              }} className="nav-link" href="/login">Logout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/cart">Cart</Link>
            </li>
            
          </>
           :<li className="nav-item">
            <Link className="nav-link" href="/login">Login</Link>
          </li>
          }


          <li className="nav-item">
            <Link className="nav-link" href="/create-ad">Create Ad</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/users">Users</Link>
          </li>
          <li>
            <input ref={inputRef} /> <button onClick={searchAd}>Search</button>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  }
import React,{useEffect, useState} from "react";
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";



const Navbar=()=>{
  const router=useRouter();
    
   
    return(
        <><style>
          {`
          
          nav .navbar-brand{
            margin-left:50px;
          }
          .nav-item{
            color:white;
            font-weight:400;
          }
          .active{
            text-decoration:underline;
          }
          
          @media (max-width: 768px) {
  nav .navbar-collapse{
    background: black;
    display:block;
    width:100%;
    height:100vh;
    top:0;
   left:0;
   position:fixed;
   z-index:-1;
   text-align:center;
   justify:content:center;
   padding-top:50%;
}
}

          
`}
        </style>
       
       <nav className= "navbar navbar-expand-md fixed-top navbar-dark bg-dark">
  
  <a className="navbar-brand text-white" >Navbar</a>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

 
  <div className="collapse navbar-collapse " id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      <li  className={router.pathname=="/" ?"nav-item active":"nav-item"} >
        <Link href="/"><a className="nav-link" >Home</a></Link>
      </li>
      <li  className={router.pathname=="/Home" ?" nav-item active":"nav-item"} >
        <Link href="/Home"><a className="nav-link">Contact</a></Link>
      </li>
      <li className="nav-item">
        <Link href="/"><a className="nav-link">Blog</a></Link>
        
      </li>
    </ul>
  </div>
</nav>
    
        </>
    )

}
export default Navbar;
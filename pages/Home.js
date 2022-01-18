import Navbar2 from "../component/Navbar2";
import Head from "next/head";

import Script from 'next/script';
const Home = () => {
    return (
      <>
      <style jsx>
          {`
            .hoi{
                position: relative;
	            height: 100vh;
	            width: 100%;
                margin-top:70px;
            }
          `}
      </style>
       <Head>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>
       </Head>
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"/>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"/>
       
        <Navbar2/>
        <div className="hoi"><h1>Hello World my Home </h1></div>
      </>
    );
  }
  
  export default Home;
  
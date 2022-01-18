import Navbar2 from "../component/Navbar2";
import Head from "next/head";
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
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
       </Head>
        <Navbar2/>
        <div className="hoi"><h1>Hello World my Home </h1></div>
      </>
    );
  }
  
  export default Home;
  
import React from "react";
//import video2 from "../public/video2.webm";



const Carasoule=()=>{
    return(
        <>
        <style jsx>
            {`
#carouselExampleIndicators{
	position: relative;
	height: 100vh;
	width: 100%;
}
#carouselExampleIndicators .carousel-inner{
	position: relative;
	height: 100%;
	width: 100%;
	background: #000;
}
.info h1{
    font-size: 60px;
    
}
video{
   
        position: relative;
        height: 100vh;
        width:100%;
        top: 0;
		object-fit: cover;
        left: 0;
        opacity: .5;
        overflow:hidden;
    
}
#carouselExampleIndicators .carousel-inner .carousel-item .info h1{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	height: auto;
	width: 100%;
	z-index: 1;
	text-align: center;
    color: white;
    font-size: 80px;
    
}

            `}
        </style>
		   
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			    	
                    <div className="info">
                         <video autoPlay loop muted>
                             <source src={"/video3.mp4"} type="video/mp4"/>
                         </video>
			      		<h1>Connecting Your World</h1>
			      		
			      	</div>
			    </div>
			    <div className="carousel-item">
			    	<div className="info">
                    <video autoPlay loop muted>
                             <source src={"/video2.webm"} type="video/webm"/>
                         </video>
			      		<h1>Creating Best Software</h1>
			      		
			      	</div>
			    </div>
			    <div className="carousel-item">
                <div className="info">
                <video autoPlay loop muted>
                             <source src={"/video3.mp4"} type="video/mp4"/>
                </video>
			    <h1>Shaping your Imagination</h1>
			      		
			    </div>
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
			

        </>
    )
}
export default Carasoule;
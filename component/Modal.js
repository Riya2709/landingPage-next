import React, {useEffect,useState} from "react";



const Modal=()=>{

const [delay,setDelay]=useState(false);
const showModal=()=>{
    setDelay(!delay);
}
    useEffect(()=>{
      setTimeout(()=> showModal(),5000)
      
    },[])

   
    return(
        <>
        <style jsx>{
            `
            .modal-dialog{
    margin-top: 150px;
   
}
.modal-title{
    margin-left: auto;
    margin-right: auto;
    font-weight: 500;

}
.modal-title span{
    font-size: 12px;
    color: cadetblue;
   
}

.modal-content{
    background-color: rgb(235, 233, 230);
}

            `
        }

        </style>
           


<div className={delay?"modal show d-block":"modal d-none" } id="myModal" >
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
        <p className="modal-title">Free Guide On Digital Transformation<br></br>
         <span>Get Consultation & free UI/UX trails</span></p>
        <button type="button" className="close" data-dismiss="modal" onClick={showModal}>&times;</button>
      </div>

      
      <div className="modal-body">
      <form >
    <div className="form-group">
      
      <input type="text" className="form-control"  placeholder="Name" />
    </div>
    <div className="form-group">
      
      <input type="email" className="form-control" id="email" placeholder="email@gmail.com" name="email"/>
    </div>
    <div className="form-group">
    <input type="submit" className="form-control btn-primary" value="Get Free Guide"/>
    </div>
    
  </form>
      </div>

      
      

    </div>
  </div>
</div>
        </>
    )
}
export default Modal;
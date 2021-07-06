import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
const EditEmployee = () =>{
   const{id} = useParams();
   const[name, processName] = useState("1");
   const[salary, processSalary] = useState("2");
   const[mobile, processMobile] = useState("3");
   const[email, processEmail] = useState("4");
   const[city, processCity] = useState("5");


 const getInfo = () =>{
       var url = "http://localhost:2222/getempinfo"
       var input = {"empid" :id};
       axios.post(url, input)
       .then(response=>{
         processName(response.data[0].name);
       })
   }

   useEffect(()=>{
    getInfo();
   },[true]);


    
        return(
            <div className="container mt-5">
                <div className="col-md-12 mb-3 text-center">
                 <h2 className="text-danger">Edit Employee Details -  {id}  </h2>
                 <p className="text-center text-danger">{/*{this.state.message}*/}</p>
                </div>
             
                <div className="row mb-3">
                        <div className="col-lg-4 mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control" 
                             defaultValue={name}   
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Salary</label>
                            <input type="text" className="form-control" 
                             defaultValue={salary}   
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>City</label>
                            <input type="text" className="form-control" 
                            defaultValue={city}    
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Mobile</label>
                            <input type="text" className="form-control" 
                            defaultValue={mobile}    
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Email-ID</label>
                            <input type="text" className="form-control" 
                            defaultValue={email}    
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <br/>
                            <button className="btn btn-warning text-white" > Update Employee </button>
                        </div>
                    </div> 
              
            </div>
        )
    

}
export default EditEmployee
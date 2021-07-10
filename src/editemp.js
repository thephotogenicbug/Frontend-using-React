import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


const EditEmployee = () =>{
   const{id} = useParams();
   const[name, processName] = useState("");
   const[salary, processSalary] = useState("");
   const[mobile, processMobile] = useState("");
   const[email, processEmail] = useState("");
   const[city, processCity] = useState("");

 const getInfo = () =>{
       var url = "http://localhost:2222/getempinfo"
       var input = {"empid" :id};
       axios.post(url, input)
       .then(response=>{
         processName(response.data[0].name);
         processSalary(response.data[0].salary);
         processMobile(response.data[0].mobile);
         processEmail(response.data[0].email);
         processCity(response.data[0].city);
       })
   }

   useEffect(()=>{
    getInfo();
   },[true]);

   const[message, updateMessage] = useState("");
   const updateEmp = () =>{
    var url = "http://localhost:2222/updateemp";
    var jsonData = {
        "empname":name, 
        "empsal":salary,
        "emailid":email,
        "cityname":city,
        "mobileno":mobile,
        "empid":id
     };
    axios.post(url , jsonData).then(response=>{
       updateMessage(response.data)
   
    })
   }
   
        return(
            <div className="container mt-5">
                <div className="col-md-12 mb-3 text-center">
                 <h2 className="text-danger">Edit Employee Details -  {id}  </h2>
                 <p className="text-center text-danger">{message}</p>
                </div>
             
                <div className="row mb-3">
                        <div className="col-lg-4 mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control" 
                            value={name} onChange={obj=>processName(obj.target.value)} 
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Salary</label>
                            <input type="text" className="form-control" 
                             value={salary} onChange={obj=>processSalary(obj.target.value)}
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>City</label>
                            <input type="text" className="form-control" 
                            value={city} onChange={obj=>processCity(obj.target.value)}
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Mobile</label>
                            <input type="text" className="form-control" 
                             value={mobile} onChange={obj=>processMobile(obj.target.value)}   
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Email-ID</label>
                            <input type="text" className="form-control" 
                             value={email} onChange={obj=>processEmail(obj.target.value)} 
                                />
                        </div>
                        <div className="col-lg-4 mb-3">
                            <br/>
                            <button className="btn btn-warning text-white" onClick={updateEmp}> Update Employee </button>
                        </div>
                    </div> 
              
            </div>
        )
    

}
export default EditEmployee
import React,{Component} from 'react';
import axios from 'axios';
class NewEmployee extends Component{
      constructor(){
          super();
          this.state={
            name:'',
            salary:'',
            city:'',
            email:'',
            message:''   
          }
      }

    processName = (obj) =>{
        this.setState({
            name:obj.target.value
        })
    }
    processSalary = (obj) =>{
        this.setState({
            salary:obj.target.value
        })
    }
    processCity = (obj) =>{
        this.setState({
            city:obj.target.value
        })
    }

    processEmail = (obj) =>{
        this.setState({
            email: obj.target.value
        })
    }
    processMobile = (obj) =>{
        this.setState({
            mobile: obj.target.value
        })
    }

    save = () =>{
       var url = "http://localhost:2222/saveemp";
       var jsonData = {
           "empname":this.state.name, 
           "empsal":this.state.salary,
           "emailid":this.state.email,
           "cityname":this.state.city,
           "mobileno":this.state.mobile
        };
       axios.post(url , jsonData).then(response=>{
           this.setState({
               message:response.data
           })
          /* this.getEmp(); // to reload the page */
       })
    }



    render(){
        return(
            <div className="container mt-5">
                <div className="col-md-12 mb-3 text-center">
                 <h2 className="text-primary">Add New Employee</h2>
                 <p className="text-center text-danger">{this.state.message}</p>
                </div>
             
                <div className="row mb-3">
                        <div className="col-lg-4 mb-3">
                            <label>Name</label>
                            <input type="text" className="form-control" onChange={this.processName}/>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Salary</label>
                            <input type="text" className="form-control" onChange={this.processSalary}/>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>City</label>
                            <input type="text" className="form-control" onChange={this.processCity}/>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Mobile</label>
                            <input type="text" className="form-control" onChange={this.processMobile}/>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <label>Email-ID</label>
                            <input type="text" className="form-control" onChange={this.processEmail}/>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <br/>
                            <button className="btn btn-primary" onClick={this.save}> Save Employee </button>
                        </div>
                    </div> 
              
            </div>
        )
    }

}
export default NewEmployee
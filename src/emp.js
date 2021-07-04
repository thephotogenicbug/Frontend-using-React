import React,{Component} from 'react';
import axios from 'axios';
class Employee extends Component{
	constructor(){
		super();
		this.state ={
			emplist:[],
            message:''
		}
	}
	getEmp =()=>{
		fetch("http://localhost:2222/emplist")
		.then(response => response.json())
		.then(allemp => this.setState({
			emplist : allemp
		}))
	}

	componentDidMount(){
		this.getEmp();
	}

    componentDidUpdate(){
        this.getEmp();
    }

    deleteEmp = (empid) =>{
        var url = "http://localhost:2222/deleteEmployee";
        var input = {"id" : empid};
        axios.post(url , input)
        .then(response => this.setState({message:response.data}))
        
      /*  this.getEmp(); to reload the page 
         alert(empid) */
     }

	
	render(){
			  return( 
				<div className="container mt-4">
					<div className="row">
                        <div className="col-lg-12">
                            <h2 align="center"> Total Employee : {this.state.emplist.length} </h2>
                            <p className="text-center text-danger"> {this.state.message} </p>
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr className="bg-light text-danger">
                                        <th>Emp Id</th>
                                        <th>Employee Name</th>
                                        <th>Salary</th>
                                        <th>City</th>
                                        <th> Mobile</th>
                                        <th> Email Id</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.emplist.map((emp , index)=>{
                                        return(
                                                <tr key={index}>
                                                    <td>{emp.empid}</td>
                                                    <td>{emp.name}</td>
                                                    <td>{emp.salary}</td>
                                                    <td>{emp.city}</td>
                                                    <td>{emp.mobile}</td>
                                                    <td>{emp.email}</td>
                                                     <td>
                                                         <button 
                                                         className="btn btn-danger" 
                                                         onClick={this.deleteEmp.bind(this, emp.empid)}>
                                                         Delete
                                                        </button>
                                                     </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
				</div>
			  );
		}
}
export default Employee;

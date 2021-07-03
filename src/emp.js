import React,{Component} from 'react';
class Employee extends Component{
	constructor(){
		super();
		this.state ={
			emplist:[],
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

	
	render(){
			  return( 
				<div className="container mt-4">
					<div className="row">
                        <div className="col-lg-12">
                            <h2 align="center"> Total Employee : {this.state.emplist.length} </h2>
                            
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="bg-light text-danger">
                                        <th> Emp Id </th>
                                        <th> Employee Name </th>
                                        <th> Salary </th>
                                        <th> City </th>
                                        <th> Mobile </th>
                                        <th> Email Id </th>
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

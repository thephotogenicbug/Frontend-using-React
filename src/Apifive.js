import React,{Component} from 'react';

class ApiFive extends Component{
  constructor(){
    super();
    this.state ={
      customerlist:[],
    }
  }

getCustomer = () =>{
  fetch("http://localhost:8080/customer")
  .then(response=>response.json())
  .then(allcustomer => this.setState({
    customerlist: allcustomer
  }))
}

componentDidMount(){
  this.getCustomer();

}

 render(){
  return (
    <div className="container mt-5">
     <div className="row">
       <div className="col-lg-12 text-center">
       <table className="table table-sm table-bordered">
       <thead>
           <tr>
             <th>Customer Name</th>
             <th>Customer Age</th>
             <th>Customer Mobile</th>
             <th>Customer City</th>
           </tr>
       </thead>
       <tbody>
       {
          this.state.customerlist.map((customer , index)=>{
          return(
          <tr key={index}>
          <td>{customer.name}</td>
          <td>{customer.age}</td>
          <td>{customer.mobile}</td>
          <td>{customer.city}</td>
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

export default  ApiFive;

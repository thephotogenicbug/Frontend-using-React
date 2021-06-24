import React,{Component} from 'react';

class Apione extends Component{
  constructor(){
    super();
    this.state ={
      citylist:[],
      booklist:[]
    }
  }

getCity = () =>{
  fetch("http://localhost:8080/")
  .then(response=>response.json())
  .then(allcity => this.setState({
    citylist: allcity
  }))
}

getBook = () =>{
  fetch("http://localhost:8081/")
  .then(response=>response.json())
  .then(allbook => this.setState({
    booklist: allbook
  }))
}

componentDidMount(){
  this.getCity();
  this.getBook();
}

 render(){
  return (
    <div className="container">
     <div className="row">
       <div className="col-lg-6 text-center">
       <h2 >Total City : {this.state.citylist.length}</h2>
     {
       this.state.citylist.map((cityname, index)=>{
         return(
           <p key={index}>{cityname}</p>
         )
       })
     }
       </div>
       <div className="col-lg-6">
       <h2 align="center">Total Books : {this.state.booklist.length}</h2>
     <table className="table table-sm table-bordered">
       <thead>
           <tr>
             <th>Book Name</th>
             <th>Book Price</th>
           </tr>
       </thead>
       <tbody>
       {
								this.state.booklist.map((book , index)=>{
								return(
										<tr key={index}>
											<td>{book.name}</td>
											<td>{book.price}</td>
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

export default  Apione;

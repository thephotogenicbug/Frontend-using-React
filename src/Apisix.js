import React,{Component} from 'react';
 /* fetching api in react using express and body-parser in backend  */
class ApiSix extends Component{
  constructor(){
    super();
    this.state ={
      booklist:[]

    }
  }



getBook = () =>{
  fetch("http://localhost:5556/booklist")
  .then(response=>response.json())
  .then(allbook =>  this.setState({
    booklist: allbook 
  }))
 

}


  

componentDidMount(){
  this.getBook();
 
}

 render(){
  return (
    <div className="container">
     <div className="row">
    
       <div className="col-lg-12">
       <h2 align="center">Total Books : {this.state.booklist.length}</h2>
     <table className="table table-sm table-bordered">
       <thead>
           <tr>
             <th>Book ID</th>
             <th>Book Name</th>
             <th>Book Price</th>
             <th>Available Qty</th>
           </tr>
       </thead>
       <tbody>
       {
		this.state.booklist.map((book , index)=>{
		return(
		<tr key={index}>
		<td>{book.bookid}</td>
		<td>{book.bookname}</td>
		<td>{book.price}</td>
		<td>{book.qty}</td>
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

export default  ApiSix;

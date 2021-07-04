import React,{Component} from 'react';
 /* fetching api in react using express and body-parser in backend  */
class ApiSix extends Component{
  constructor(){
    super();
    this.state ={
      booklist:[],
      message:''

    }
  }



getBook = () =>{
  fetch("http://localhost:2222/booklist")
  .then(response=>response.json())
  .then(allbook =>  this.setState({
    booklist: allbook 
  }))
 

  }

  componentDidMount(){
    this.getBook();
  
  }

  componentDidUpdate(){
    this.getBook();
  }

  deleteBook = (bookid) =>{
  var input = {"id" :bookid};
  var jsonData = JSON.stringify(input);
  var postData = {
    method:'POST',
    header:{'Content-Type':'application/json'},
    body:jsonData
    }
    fetch("http://localhost:2222/deleteBook" , postData)
    .then(response =>response.text())
    .then(statusData => this.setState({message:statusData}) )
    }

 render(){
  return (
    <div className="container">
     <div className="row">
    
       <div className="col-lg-12">
       <h2 align="center">Total Books : {this.state.booklist.length}</h2>
       <p className="text-danger text-center">{this.state.message}</p>
     <table className="table table-sm table-bordered text-center">
       <thead>
           <tr>
             <th>Book ID</th>
             <th>Book Name</th>
             <th>Book Price</th>
             <th>Available Qty</th>
             <th>Action</th>
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
              <td>
              <button 
              className="btn btn-danger" 
              onClick={this.deleteBook.bind(this, book.bookid)} >
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

export default  ApiSix;

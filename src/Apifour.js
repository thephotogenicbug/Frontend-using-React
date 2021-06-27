import React,{Component} from 'react';
 /* fetching api in react using express and body-parser in backend  */
class ApiFour extends Component{
  constructor(){
    super();
    this.state ={
      citylist:[],
      booklist:[],
      courselist:[]
    }
  }

getCity = () =>{
  fetch("http://localhost:8080/city")
  .then(response=>response.json())
  .then(allcity => this.setState({
    citylist: allcity
  }))
}

getBook = () =>{
  fetch("http://localhost:8080/book")
  .then(response=>response.json())
  .then(allbook => this.setState({
    booklist: allbook
  }))
}

getCourse = () =>{
    fetch("http://localhost:8080/course")
    .then(response=>response.json())
    .then(allcourse => this.setState({
      courselist: allcourse
    }))
  }
  

componentDidMount(){
  this.getCity();
  this.getBook();
  this.getCourse();
}

 render(){
  return (
    <div className="container">
     <div className="row">
       <div className="col-lg-4 text-center">
       <h2 >Total City : {this.state.citylist.length}</h2>
     {
       this.state.citylist.map((cityname, index)=>{
         return(
           <p key={index}>{cityname}</p>
         )
       })
     }
       </div>
       <div className="col-lg-4">
       <h2 align="center">Total Books : {this.state.booklist.length}</h2>
     <table className="table table-sm table-bordered">
       <thead>
           <tr>
             <th>Book Name</th>
           </tr>
       </thead>
       <tbody>
       {
		this.state.booklist.map((book , index)=>{
		return(
		<tr key={index}>
		<td>{book}</td>
		</tr>
		)
	})
}

       </tbody>
     </table>
       </div>
       <div className="col-md-4 text-center">
       <h2 >Total Course : {this.state.courselist.length}</h2>
     {
       this.state.courselist.map((coursename, index)=>{
         return(
           <p key={index}>{coursename}</p>
         )
       })
     }    
       </div>
     </div>  
    </div>
  );
 }
}

export default  ApiFour;

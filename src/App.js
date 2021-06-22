import React,{Component} from 'react';

class App extends Component{
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
    <div>
     <h1>Welcome to React + NodeJS </h1>
     <h2>Total City : {this.state.citylist.length}</h2>
     {
       this.state.citylist.map((cityname, index)=>{
         return(
           <p key={index}>{cityname}</p>
         )
       })
     }
     <h2>Total Books : {this.state.booklist.length}</h2>
     <table align="center" cellPadding='10'>
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
  );
 }
}

export default App;

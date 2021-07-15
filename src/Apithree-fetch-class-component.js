import React,{Component} from 'react'
class ApiThree extends Component{
        constructor(){
            super();
            this.state={
                booklist:[],
                citylist:[],
                companylist:[],
                emplist:[]
            }
        }
        getBook = () =>{
            fetch("http://localhost:3031/")
            .then(response => response.json())
            .then(allbook =>this.setState({
                booklist : allbook
            }))
        }
        getCity = () =>{
            fetch("http://localhost:3032/")
            .then(response => response.json())
            .then(allcity =>this.setState({
                citylist : allcity
            }))
        }
        getCompany = () =>{
            fetch("http://localhost:3033/")
            .then(response => response.json())
            .then(allcompany =>this.setState({
                companylist : allcompany
            }))
        }
        getEmp = () =>{
            fetch("http://localhost:3034/")
            .then(response => response.json())
            .then(allemp =>this.setState({
                emplist : allemp
            }))
        }
        componentDidMount(){
            this.getBook();
            this.getCity();
            this.getCompany();
            this.getEmp();
        }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text=primary">My Dashboard</h3>
                    </div>
                </div>
                <div className="row mt-5">
                 <div className="col-md-3">
                     <h5>Book List</h5>

                     {
                    this.state.booklist.map((booklist, index)=>{
                        return(
                        <div className="border text-center" key={index}>
                          <p> {booklist.name} </p>
                        </div>
                        
                        )
                    })
                    }
                    <div className="length">
                    {this.state.booklist.length}
                    </div>

                    
                 </div>
                 <div className="col-md-3">
                  <h5>City List</h5>
                  {
                      this.state.citylist.map((city, index)=>{
                          return(
                              <div className="border text-center" key={index}>
                                  <p>  {city.name} </p>
                              </div>
                          )
                      })
                  }
                  <div className="length">
                    {this.state.citylist.length}
                    </div>
                 </div>
                 <div className="col-md-3">
                 <h5>Company List</h5>
                  {
                      this.state.companylist.map((company, index)=>{
                          return(
                              <div className="border text-center" key={index}>
                                  <p>  {company.name} </p>
                              </div>
                          )
                      })
                  }
                  <div className="length">
                    {this.state.companylist.length}
                    </div>
                 </div>
                 <div className="col-md-3">
                 <h5>Emp List</h5>
                 <table className="table table-sm table-bordered text-center">
                    <thead>
                        <tr>
                            <th>Emp Name</th>
                            <th>Emp Age</th>
                        </tr>
                    </thead>
                    <tbody>
       {
					this.state.emplist.map((emp , index)=>{
					return(
					<tr key={index}>
				    <td>{emp.name}</td>
					<td>{emp.age}</td>
					</tr>
					)
				})
			  }

                    </tbody>
                    </table>
                  <div className="length">
                    {this.state.emplist.length}
                    </div>
                 </div>
                
                </div>
            </div>
        )
    }


}
export default ApiThree
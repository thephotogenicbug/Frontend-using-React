import React,{Component} from 'react';
class ApiTwo extends Component{
	constructor(){
		super();
		this.state ={
			servicelist:[]
		}
	}
	getService =()=>{
		fetch("http://localhost:8082/")
		.then(response => response.json())
		.then(allservice => this.setState({
			servicelist : allservice
		}))
	}
	
	componentDidMount(){
		this.getService();
	}
	
	render(){
			  return( 
				<div className="container">
					<div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 className="text-primary"> {this.state.servicelist.length} - Service List </h1>
                        </div>
                    </div>
					<div className="row">
						{
							this.state.servicelist.map((myservice, index)=>{
								return(
									<div className="col-lg-4 mb-4" key={index}>
										<div className="p-3 bg-light rounded">
										 <h5 className="text-center"> {myservice.name} </h5>	
										 <img className="img-fluid rounded" src={`image/${myservice.pic}`} />
										 <p className="text-center text-danger mt-3"> Service Cost : {myservice.price} </p>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			  );
		}
}
export default ApiTwo;

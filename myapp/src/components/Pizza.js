import React,{useState} from "react";

function Pizza({pizza}){
	const [quantity,setquantity] = useState(1);
	const [varient,setVarient] = useState('small');
	return(
			<div style={{margin:"100px"}} className="shadow-lg p-1 mb-5 bg-white rounded"> 
				<h1> {pizza.name}</h1>
				<img src = {pizza.image} className="img-fluid"  style={{height:"200px"}} alt="pizza piece"/>
				<div className="flex-container"> 
                  	<div className="w-100">
                  		<p> Varient </p>
                  		<select className="form-control" value={varient} onChange={(e)=>setVarient(e.target.value)}>
                  			{ pizza.varients.map(varient=>{
                  					return <option value={varient}> {varient} </option>
                  				})
                  			}
                  		 </select> 
                  			
                  	</div>

                  	<div className="w-100"> 
                  		<p> Quantity</p>
                  		<select className="form-control" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}> 
                  			{/*{ pizza.price.map(price=>)}*/}
	                  		{[...Array(10).keys()].map((x,i)=>{
	                  			return <option value={i+1}> {i+1} </option>
	                  		})}
                  		</select>
                  	</div>


                  	<div className="flex-container"> 
                  		<div className="w-100 m-1"> 
                  			<h1 className="mt-1"> Price  {pizza.prices[0][varient] * quantity} Rs/-</h1>
                  		</div>
                  		<div className="w-100 m-1">
                  			<button className="btn"> Add Cart </button>
                  		 </div>

                  		<div> </div>
                  	</div>

                  	<div> 
                  	</div>
				</div>
			</div>

		)
}
export default Pizza;
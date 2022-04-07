import React from "react";

function Pizza({pizza}){
	// const [quantity,setquantity] = useState(1);
	// const [varient,setVarient] = useState('small');
	return(
			<div> 
				<h1> {pizza.name}</h1>
				<img src = {pizza.image} className="img-fluid"  style={{height:"200px"}} alt="pizza piece"/>
				<div className="flex-container"> 
                  	<div className="w-100">
                  		<p> Varient </p>
                  		<select>
                  			{ pizza.varients.map(varient=>{
                  					return <option value={varient}> {varient} </option>
                  				})
                  			}
                  		 </select> 
                  			
                  	</div>

                  	<div className="w-100"> 
                  		<p> Quantity</p>
                  		<select> 
                  			{/*{ pizza.price.map(price=>)}*/}
	                  		{[...Array(10).keys()].map((x,i)=>{
	                  			return <option value={i+1}> {i+1} </option>
	                  		})}
                  		</select>
                  	</div>


                  	<div className="flex-container"> 
                  		<div> </div>
                  		<div> </div>
                  		<div> </div>
                  	</div>

                  	<div> 
                  	</div>
				</div>
			</div>

		)
}
export default Pizza;
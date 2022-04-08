import React from "react";
import pizzas from "../pizzadatajson"
import Pizza from "../components/Pizza"
export default function Homepage() {
	return (
		<div className="row">
			{/*<h1> {pizzas.length} </h1>*/}
			{pizzas.map(pizza => {
				return <div className="col-md-4">
					<div>
						<Pizza pizza={pizza} />
					</div>
				</div>
			})
			}
		</div>
	)
}
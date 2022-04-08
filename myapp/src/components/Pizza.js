import React, { useState } from "react";
import { Modal } from "react-bootstrap"
// import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Pizza({ pizza }) {
	const [quantity, setquantity] = useState(1);
	const [varient, setVarient] = useState('small');

	// eslint-disable-next-line no-unused-vars
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div style={{ margin: "100px" }} className="shadow-lg p-1 mb-5 bg-white rounded">
			<div onClick={handleShow}>
				<h1> {pizza.name}</h1>
				<img src={pizza.image} className="img-fluid" style={{ height: "200px" }} alt="pizza piece" />
			</div>
			<div className="flex-container">
				<div className="w-100 m-1">
					<p> Varient </p>
					<select className="form-control" value={varient} onChange={(e) => setVarient(e.target.value)}>
						{pizza.varients.map(varient => {
							return <option value={varient}> {varient} </option>
						})
						}
					</select>
				</div>

			{/*</div>*/}
			<div className="w-100">
				<p> Quantity</p>
				<select className="form-control" value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
					{/*{ pizza.price.map(price=>)}*/}
					{[...Array(10).keys()].map((x, i) => {
						return <option value={i + 1}> {i + 1} </option>
					})}
				</select>
			  </div>
			</div>

			<div className="flex-container">
				<div className="w-100 m-1">
					<h1 className="mt-1"> Price  {pizza.prices[0][varient] * quantity} Rs/-</h1>
				</div>
				<div className="w-100 m-1">
					<button className="btn"> Add Cart </button>
				</div>
   			 </div>

			{/*modal*/}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{pizza.name}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<img src={pizza.image} className="img-fluid" style={{height:"300px"}} />
					<p> {pizza.description} </p>
				</Modal.Body>

				<Modal.Footer>
					<button className="btn" onClick={handleClose}> Close  </button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
export default Pizza;
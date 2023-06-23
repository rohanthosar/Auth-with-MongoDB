import {useState, useRef} from "react";
import axios from "axios";

export default function WhatNext() {

	const rName = useRef();
	const[name, setName] = useState("");
	const[choice, setChoice] = useState("job");

	const hName = (event) => {setName(event.target.value); }
	const hChoice = (event) => {setChoice(event.target.value); }
	
	const save = (event) => {
		event.preventDefault();
		let data = {name, choice};
		let urladd = "http://localhost:9000/save";
		axios.post(urladd, data)
		.then(res => {
			if(res.data.insertedld !="") {
			alert("thank u");
			setName("");
			setChoice("job");
			rName.current.focus();
			}
		})
		.catch(err => alert("issue" + err));

	}
	return(
	<>
	<center>
	<h1> Fill the form </h1>
	<form onSubmit={save}>
	<input type ="text" placeholder="enter name"
	onChange={hName} value={name} ref={rName}/>
	<br/><br/>
	<input type="radio" name="w" value="job" defaultChecked={true}
	onChange={hChoice} checked={choice=="job"}/>Job
	<input type="radio" name="w" value="ms" 
	onChange={hChoice} checked={choice=="ms"}/>Ms
	<input type="radio" name="w" value="mba" 
	onChange={hChoice} checked={choice=="mba"}/>Mba
	<br/><br/>
	<input type="submit"/>
	</form>
	</center>
	</>
	);
}

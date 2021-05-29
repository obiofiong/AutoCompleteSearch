import React from "react";
import AutoComplete from "./AutoComplete";
import "./main.css"
import countryList from "../resources/countryList";


function Main() {
	return (
		<div className ="main">
			<h1>Auto Complete Search</h1>
			<p>Input any letter and watch it auto-suggest countries to you</p>
			<AutoComplete data = {countryList}/>
		</div>
	);
}

export default Main;

import React from "react";
import AutoComplete from "./AutoComplete";
import "./main.css"

function Main() {
	return (
		<div className ="main">
			<h1>Auto Complete Search</h1>
			<p>Search for a country's name</p>
			<AutoComplete />
		</div>
	);
}

export default Main;

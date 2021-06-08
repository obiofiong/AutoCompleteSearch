import React, { useState } from "react";
import "./autoComplete.css";

function AutoComplete({ data }) {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	const handleInputChange = (e) => {
		const entry = e.target.value;
		let suggestion = [];

		if (entry.length > 0) {
			const regex = new RegExp(`^${entry}`, "i");
			suggestion = data.filter((v) => regex.test(v));
		}
		setQuery(entry);
		setSuggestions(suggestion);
	};
	const handleChoice = (suggestion) => {
		setQuery(suggestion);
		setSuggestions([]);
	};

	const suggestionDisplay = suggestions
		// .slice(0,10)
		.map((suggestion, index) => (
			<li onClick={() => handleChoice(suggestion)} key={index}>
				{suggestion}
			</li>
		));

	return (
		<div className="autoComplete">
			<div className="autoCompleteInput">
				<input
					type="text"
					value={query}
					onChange={handleInputChange}
					placeholder="Start typing..."
				/>
			</div>
			{suggestions.length !== 0 && 
			<ul>{suggestionDisplay}</ul>
			
			

			// ? (
			// 	<ul>{suggestionDisplay}</ul>
			// ) : (
			// 	<ul>
			// 		<li>
			// 			{" "}
			// 			<i>No result found in the database</i>
			// 		</li>
			// 	</ul>
			// )
			
			}
		</div>
	);
}

export default AutoComplete;


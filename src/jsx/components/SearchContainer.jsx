import React, { useState } from "react";
import Search from "./Search.jsx";
import AdvancedSearch from "./AdvancedSearch.jsx";

function SearchContainer(props) {
	const [isAdvanced, setAdvanced] = useState(props.showAdvancedSearch);

	function toggleTypeOfSearch(ev) {
		ev.preventDefault();
		setAdvanced(!isAdvanced);
	}

	return isAdvanced ? (
		<AdvancedSearch toggleTypeOfSearch={toggleTypeOfSearch} {...props} />
	) : (
		<Search toggleTypeOfSearch={toggleTypeOfSearch} {...props} />
	);
}

export default SearchContainer;

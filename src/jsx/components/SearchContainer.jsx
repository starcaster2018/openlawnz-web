import React, { useState } from "react";
import Search from "./Search.jsx";
import AdvancedSearch from "./AdvancedSearch.jsx";

function SearchContainer(props) {
	const [isAdvanced, setAdvanced] = useState(props.showAdvancedSearch);
	const { CustomSearch } = props;

	function toggleTypeOfSearch(ev) {
		ev.preventDefault();
		setAdvanced(!isAdvanced);
	}

	return isAdvanced ? (
		<AdvancedSearch onCancelSearch={toggleTypeOfSearch} {...props} />
	) : CustomSearch ? (
		<CustomSearch toggleTypeOfSearch={toggleTypeOfSearch} {...props} />
	) : (
		<Search toggleTypeOfSearch={toggleTypeOfSearch} {...props} />
	);
}

export default SearchContainer;

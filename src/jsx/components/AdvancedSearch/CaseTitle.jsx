import React, { useState } from "react";

import ListBox from "./ListBox.jsx";
import useDebouncedFetch from "./useDebouncedFetch.jsx";

const CaseTitle = ({ value, id, onChange, className, isPopulated }) => {
	const [title, setTitle] = useState(value.title || "");
	const { results: titleResults } = useDebouncedFetch({
		source: "http://localhost:8085/cases/titles?search=",
		term: title,
		extraParams: "&start=0&end=5"
	});
	const onValueChange = value => {
		setTitle(value);
		onChange({ id, value });
	};

	return (
		<div className={className}>
			<ListBox
				id={`case-title-${id}`}
				value={title}
				automatic={false}
				isPopulated={isPopulated}
				results={titleResults}
				textSelection={result => result.legislationTitle}
				onInputValueChange={value => onValueChange(value)}
				onSelection={({ legislationTitle = "" }) => onValueChange(legislationTitle, "act")}
			/>
		</div>
	);
};

export default CaseTitle;

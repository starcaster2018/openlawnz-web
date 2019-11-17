import React, { Component } from "react";

const ReadMore = props => {
	const handleReadMore = e => {
		e.preventDefault();
		if (e) {
			const text = document.getElementById("text_" + props.id);
			const readmore = document.getElementById("readmore_" + props.id);
			text.style.height = "auto";
			readmore.style.display = "none";
		}
	};

	return (
		<p>
			<span className="text" id={"text_" + props.id}>
				{props.text}
			</span>
			<span className="readmore" id={"readmore_" + props.id}>
				.....{" "}
				<span className="readmore-text" onClick={handleReadMore}>
					Read more
				</span>
			</span>
		</p>
	);
};

export default ReadMore;

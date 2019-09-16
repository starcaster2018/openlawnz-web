import React from "react";

export default function InfoCard({ children, classModifier = "" }) {
	return <div className={"info-card " + classModifier}>{children}</div>;
}

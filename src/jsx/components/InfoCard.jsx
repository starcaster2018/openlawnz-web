import React from "react";

export default function InfoCard({ children, classModifier = "" }) {
	return <section className={"info-card " + classModifier}>{children}</section>;
}

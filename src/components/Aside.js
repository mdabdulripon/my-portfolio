import React from "react";
import Intro from "./Intro.js";
import Social from "./Social.js";

export default function Aside() {
	return (
		<aside className="sidebar" aria-label="Profile & Navigation">
			<Intro />
			<Social />
		</aside>
	);
}

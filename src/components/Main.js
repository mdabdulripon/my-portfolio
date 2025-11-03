import React from "react";
import About from "./About.js";
import Skills from "./Skills.js";
import Experience from "./Experience.js";
import Projects from "./Projects.js";
import Education from "./Education.js";
import Contact from "./Contact.js";

export default function Main() {
	return (
		<main className="main-content" id="content">
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Education />
			<Contact />
		</main>
	);
}

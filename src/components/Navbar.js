import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const [active, setActive] = useState("about");
	const location = useLocation();

	const handleClick = (id) => {
		setActive(id);
	};

	return (
		<nav className="nav-links">
			<a
				href="#about"
				onClick={() => handleClick("about")}
				className={active === "about" ? "active" : ""}
			>
				About
			</a>
			<a
				href="#skills"
				onClick={() => handleClick("skills")}
				className={active === "skills" ? "active" : ""}
			>
				Skills
			</a>
			<a
				href="#experience"
				onClick={() => handleClick("experience")}
				className={active === "experience" ? "active" : ""}
			>
				Experience
			</a>
			<a
				href="#projects"
				onClick={() => handleClick("projects")}
				className={active === "projects" ? "active" : ""}
			>
				Projects
			</a>
			<a
				href="#education"
				onClick={() => handleClick("education")}
				className={active === "education" ? "active" : ""}
			>
				Education
			</a>
			<a
				href="#contact"
				onClick={() => handleClick("contact")}
				className={active === "contact" ? "active" : ""}
			>
				Contact
			</a>
			<Link
				to="/blog"
				className={location.pathname === "/blog" ? "active" : ""}
				onClick={() => setActive("")}
			>
				Blog
			</Link>
		</nav>
	);
}

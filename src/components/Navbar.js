import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "../data/menu.json"; // adjust path as needed

export default function Navbar() {
	const [active, setActive] = useState("about");
	const location = useLocation();

	const handleClick = (id) => {
		setActive(id);
	};

	return (
		<nav className="nav-links">
			{menuItems.map((item) =>
				item.type === "section" ? (
					<a
						key={item.id}
						href={`#${item.id}`}
						onClick={() => handleClick(item.id)}
						className={active === item.id ? "active" : ""}
					>
						{item.label}
					</a>
				) : (
					<Link
						key={item.id}
						to={item.path}
						className={location.pathname === item.path ? "active" : ""}
						onClick={() => setActive("")}
					>
						{item.label}
					</Link>
				)
			)}
		</nav>
	);
}

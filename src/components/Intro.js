import React from "react";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";

export default function Intro() {
	return (
		<div className="profile">
			<Link className="logo" to="/">Abdul Awal Ripon</Link>
			<div className="title">Lead Software Engineer</div>
			<p className="summary">
				Experienced full-stack engineer (10+ years) across finance, insurance,
				education, and payments. I design and deliver scalable, high-performing
				web and cloud solutions, mentor teams, and drive continuous improvement.
			</p>
			<Navbar />
		</div>
	);
}

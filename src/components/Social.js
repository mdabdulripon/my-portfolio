import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Social() {
	return (
		<div className="social-icons" aria-label="Social links">
			<a
				className="icon-btn"
				href="mailto:mdabdulripon@gmail.com"
				aria-label="Email"
			>
				<MdEmail />
			</a>
			<a
				className="icon-btn"
				href="https://github.com/mdabdulripon"
				aria-label="GitHub"
			>
				<FaSquareGithub />
			</a>
			<a
				className="icon-btn"
				href="https://www.linkedin.com/in/abdul-ripon-030483126/"
				aria-label="LinkedIn"
			>
				<FaLinkedin />
			</a>
		</div>
	);
}

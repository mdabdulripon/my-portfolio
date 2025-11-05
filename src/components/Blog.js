import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Blog() {
	const navigate = useNavigate();

	return (
		<div className="container">
			<section id="blog">
				<h1>Blog</h1>
				<h2>Coming Soon</h2>
				<p>
					Exciting technical articles and project insights are on the way. Stay
					tuned for updates on microservices, Angular NX, and AWS DevOps topics.
				</p>

				<button
					onClick={() => navigate("/")}
					style={{
						marginTop: "20px",
						padding: "10px 20px",
						backgroundColor: "var(--accent)",
						color: "var(--bg)",
						fontWeight: 600,
						border: "none",
						borderRadius: "8px",
						cursor: "pointer",
						transition: "background 0.2s ease",
					}}
					onMouseOver={(e) => (e.target.style.backgroundColor = "#9ac2ff")}
					onMouseOut={(e) => (e.target.style.backgroundColor = "var(--accent)")}
				>
					<IoMdArrowRoundBack />
				</button>
			</section>
		</div>
	);
}

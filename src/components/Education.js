import React from "react";
import educationData from "../data/education.json"; // adjust path if needed

export default function Education() {
	return (
		<section id="education">
			<div className="section-header">Education</div>
			{educationData.map((edu, index) => (
				<div key={index} className="experience-item experience-wide">
					<time>{edu.school}</time>
					<div>
						<h3>{edu.degree}</h3>
						<p>GPA: {edu.gpa}</p>
					</div>
				</div>
			))}
		</section>
	);
}

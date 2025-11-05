import React from "react";
import experience from "../data/experience.json"; // adjust path if needed

export default function Experience() {
	return (
		<section id="experience">
			<div className="section-header">Professional Experience</div>

			{experience.map((job, idx) => (
				<div
					key={`${job.company}-${job.period}-${idx}`}
					className="experience-item"
				>
					<time>{job.period}</time>
					<div>
						<h3>
							{job.title} · {job.company} — {job.location}
						</h3>
						<p>{job.summary}</p>

						{Array.isArray(job.tech) && job.tech.length > 0 && (
							<div className="tech-list">
								{job.tech.map((t) => (
									<span key={t} className="tech-tag">
										{t}
									</span>
								))}
							</div>
						)}
					</div>
				</div>
			))}
		</section>
	);
}

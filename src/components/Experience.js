import React from "react";

export default function Experience() {
	return (
		<section id="experience">
			<div className="section-header">Professional Experience</div>

			<div className="experience-item">
				<time>Jun 2022 — Present</time>
				<div>
					<h3>
						Senior Associate Full Stack Developer · Fannie Mae — Plano, TX
					</h3>
					<p>
						Led the frontend team for microservices apps using Angular NX with
						Module/Native Federation. Designed scalable architecture for
						multi-repo setups and collaborated with backend teams on RESTful
						APIs and AWS integrations (Lambda, ECS). Drove DevOps best practices
						and supported performance monitoring with Splunk and CloudWatch.
					</p>
					<div className="tech-list">
						<span className="tech-tag">Angular NX</span>
						<span className="tech-tag">TypeScript</span>
						<span className="tech-tag">Java</span>
						<span className="tech-tag">AWS (Lambda, ECS, S3)</span>
						<span className="tech-tag">Native Federation</span>
						<span className="tech-tag">Splunk / CloudWatch</span>
					</div>
				</div>
			</div>

			<div className="experience-item">
				<time>Apr 2019 — Jun 2022</time>
				<div>
					<h3>Senior Full Stack Developer · CSG International — Allen, TX</h3>
					<p>
						Delivered enterprise payment processing (credit card, ACH, mobile).
						Built reusable UI components and private NPM libraries. Improved
						microservice communication and reduced latency through architecture
						optimization. Monitored production systems and resolved issues
						efficiently.
					</p>
					<div className="tech-list">
						<span className="tech-tag">Angular</span>
						<span className="tech-tag">Node.js</span>
						<span className="tech-tag">.NET Core</span>
						<span className="tech-tag">PostgreSQL / MSSQL</span>
						<span className="tech-tag">AWS (Lambda, DynamoDB, S3, ECS)</span>
					</div>
				</div>
			</div>

			<div className="experience-item">
				<time>Aug 2017 — Apr 2019</time>
				<div>
					<h3>Front-End Developer · Chubb Insurance — Jersey City, NJ</h3>
					<p>
						Built insurance web apps (Workers Comp, Cyber ERM, Professional
						Liability). Led UI/UX improvements, authored unit tests for
						Redux-style state, and participated in reviews to ensure quality.
					</p>
					<div className="tech-list">
						<span className="tech-tag">Angular 6</span>
						<span className="tech-tag">TypeScript</span>
						<span className="tech-tag">SASS</span>
						<span className="tech-tag">PostgreSQL / MongoDB</span>
						<span className="tech-tag">Azure</span>
					</div>
				</div>
			</div>

			<div className="experience-item">
				<time>Feb 2014 — Aug 2017</time>
				<div>
					<h3>
						Front End Web Developer · Benchmark Education — New Rochelle, NY
					</h3>
					<p>
						Built educational publishing apps and internal product management
						tools. Designed accessible, responsive user interfaces used across
						devices.
					</p>
					<div className="tech-list">
						<span className="tech-tag">JavaScript</span>
						<span className="tech-tag">Vue</span>
						<span className="tech-tag">jQuery</span>
						<span className="tech-tag">HTML5 / CSS3</span>
						<span className="tech-tag">Python</span>
					</div>
				</div>
			</div>
		</section>
	);
}

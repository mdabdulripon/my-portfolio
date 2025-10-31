import React from "react";

export default function Intro() {
	return (
		<section className="py-16 md:py-24">
			<div className="max-w-3xl">
				<h1 className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight">
					Abdul Awal Ripon
				</h1>

				<h3 className="font-bold mb-5 text-brand-500 text-2xl">
					Senior Full-Stack Developer
				</h3>

				<p className="text-zinc-200 mt-5 leading-relaxed">
					An accomplished software engineer with a proven track record of
					delivering high-quality, scalable web applications across the finance,
					insurance, education, and payment sectors. Demonstrates strong
					expertise in both front-end and back-end development, with a focus on
					building secure, efficient, and maintainable enterprise solutions that
					align with modern engineering and DevOps best practices.
				</p>
				<p className="text-zinc-300 mt-5 leading-relaxed">
					Proficient in developing robust microservices using Java 17 Spring
					Boot and .NET 8 Web API, leveraging technologies such as Gradle, CQRS
					with MediatR, FluentValidation, Entity Framework Core, PostgreSQL,
					Redis, RabbitMQ, MassTransit, and gRPC. Experienced in Docker-based
					containerization and automated CI/CD pipelines through AWS CodeBuild,
					CodePipeline, and ECR, with integrated quality and security tools
					including SonarQube, STTM, and DAST.
				</p>
				<p className="text-zinc-200 mt-5 leading-relaxed">
					Highly skilled in front-end development with Angular, Nx workspace,
					Nebular, PrimeNG, and Module Federation (including Native Federation).
					Adept at designing modular, dynamic architectures that support
					multiple themes, role-based access, and seamless micro-frontend
					integration—enhancing scalability, performance, and user experience.
				</p>

				<p className="text-zinc-200 mt-5 leading-relaxed">
					Beyond core development, contributes to automation, performance
					tuning, and release management, ensuring smooth deployments and
					reliable post-release performance. Actively involved in optimizing
					workflows, mitigating vulnerabilities, and maintaining continuous
					integration pipelines. Also brings hands-on experience in data
					analytics and optimization, using Python (pandas, scikit-learn) and
					Excel Solver to drive insights and informed decision-making.
				</p>

				<p className="text-zinc-200 mt-5 leading-relaxed">
					Combines technical excellence with a collaborative and
					forward-thinking mindset—committed to continuous improvement,
					innovation, and delivering tangible business value through technology.
				</p>

				<div className="mt-8 flex gap-3">
					<a
						href="https://github.com/mdabdulripon"
						target="_blank"
						rel="noreferrer"
						className="px-4 py-2 rounded-xl border border-zinc-700 hover:border-zinc-600"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/abdul-ripon-030483126/"
						target="_blank"
						rel="noreferrer"
						className="px-4 py-2 rounded-xl border border-zinc-700 hover:border-zinc-600"
					>
						Linkedin
					</a>
				</div>
			</div>
		</section>
	);
}

import { render, screen, within } from "@testing-library/react";
import Experience from "../Experience";
import experienceData from "../../data/experience.json";

describe("Experience", () => {
	it("renders each role, period, and tech stack", () => {
		render(<Experience />);

		experienceData.forEach((job) => {
			const periodElement = screen.getByText(job.period);
			expect(periodElement).toBeInTheDocument();

			const jobCard = periodElement.closest(".experience-item");
			expect(jobCard).not.toBeNull();

			expect(
				within(jobCard).getByRole("heading", {
					name: new RegExp(`${job.title} · ${job.company} — ${job.location}`),
				})
			).toBeInTheDocument();
			expect(within(jobCard).getByText(job.summary)).toBeInTheDocument();

			const jobTech = Array.isArray(job.tech) ? job.tech : [];
			jobTech.forEach((tech) => {
				const badges = within(jobCard).queryAllByText(tech, {
					selector: ".tech-tag",
				});
				expect(badges.length).toBeGreaterThan(0);
			});
		});

		const expectedBadges = experienceData.reduce(
			(total, job) => total + (Array.isArray(job.tech) ? job.tech.length : 0),
			0
		);
		expect(
			screen.getAllByText(/.+/, { selector: ".tech-tag" })
		).toHaveLength(expectedBadges);
	});
});

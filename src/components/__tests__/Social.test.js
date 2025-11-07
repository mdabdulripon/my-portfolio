import { render, screen } from "@testing-library/react";
import Social from "../Social";

describe("Social", () => {
	it("renders social media links with accessible labels", () => {
		render(<Social />);

		const emailLink = screen.getByRole("link", { name: /email/i });
		expect(emailLink).toHaveAttribute("href", "mailto:mdabdulripon@gmail.com");

		const githubLink = screen.getByRole("link", { name: /github/i });
		expect(githubLink).toHaveAttribute("href", "https://github.com/mdabdulripon");
		expect(githubLink).toHaveAttribute("target", "_blank");

		const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
		expect(linkedinLink).toHaveAttribute(
			"href",
			"https://www.linkedin.com/in/abdul-ripon-030483126/"
		);
		expect(linkedinLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
	});
});


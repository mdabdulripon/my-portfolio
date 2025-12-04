import { render, screen } from "@testing-library/react";
import Skills from "../Skills";
import skillsData from "../../data/skills.json";

describe("Skills", () => {
	it("lists all configured skills", () => {
		render(<Skills />);

		expect(screen.getByText("Technical Skills")).toBeInTheDocument();
		// expect(screen.getByRole("heading", { name: /core competencies/i })).toBeInTheDocument();

		const tags = screen.getAllByText(/.+/, { selector: ".tech-tag" });
		expect(tags).toHaveLength(skillsData.skills.length);

		skillsData.skills.forEach(({ name }) => {
			expect(screen.getByText(name)).toBeInTheDocument();
		});
	});
});


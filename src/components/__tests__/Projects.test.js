import { render, screen } from "@testing-library/react";
import Projects from "../Projects";

describe("Projects", () => {
	it("announces upcoming project content", () => {
		render(<Projects />);

		expect(screen.getByText("Projects (Selected)")).toBeInTheDocument();
		expect(
			screen.getByText(/coming soon — highlight microservices/i)
		).toBeInTheDocument();
	});
});


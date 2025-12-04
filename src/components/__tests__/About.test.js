import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About", () => {
	it("renders the about section content", () => {
		render(<About />);

		expect(screen.getByText("About")).toBeInTheDocument();
		expect(screen.getAllByText(/.+/, { selector: "p" })).toHaveLength(4);
		expect(screen.getByText(/lead software engineer with over a decade/i)).toBeInTheDocument();
	});
});


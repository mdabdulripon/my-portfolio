import { render, screen } from "@testing-library/react";
import Home from "../Home";

jest.mock("../Aside.js", () => () => <div data-testid="aside-component" />);
jest.mock("../Main.js", () => () => <div data-testid="main-component" />);

describe("Home", () => {
	it("renders the layout with aside and main content", () => {
		const { container } = render(<Home />);

		expect(container.querySelector(".container")).toBeInTheDocument();
		expect(screen.getByTestId("aside-component")).toBeInTheDocument();
		expect(screen.getByTestId("main-component")).toBeInTheDocument();
	});
});

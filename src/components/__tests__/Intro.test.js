import { render, screen } from "@testing-library/react";
import Intro from "../Intro";

jest.mock("../Navbar.js", () => () => <div data-testid="navbar-component" />);
jest.mock(
	"react-router-dom",
	() => ({
		Link: ({ to, children, ...props }) => (
			<a href={typeof to === "string" ? to : to.pathname} {...props}>
				{children}
			</a>
		),
	}),
	{ virtual: true }
);

describe("Intro", () => {
	it("shows profile information and navigation", () => {
		render(<Intro />);

		const logoLink = screen.getByRole("link", { name: /abdul awal ripon/i });
		expect(logoLink).toHaveAttribute("href", "/");

		expect(
			screen.getByText(/experienced full-stack engineer/i)
		).toBeInTheDocument();
		expect(screen.getByTestId("navbar-component")).toBeInTheDocument();
	});
});

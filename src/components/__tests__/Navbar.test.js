import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../Navbar";
import menuItems from "../../data/menu.json";

const mockUseLocation = jest.fn();

jest.mock(
	"react-router-dom",
	() => ({
		Link: ({ to, children, ...props }) => (
			<a href={typeof to === "string" ? to : to.pathname} {...props}>
				{children}
			</a>
		),
		useLocation: () => mockUseLocation(),
	}),
	{ virtual: true }
);

describe("Navbar", () => {
	beforeEach(() => {
		mockUseLocation.mockReturnValue({ pathname: "/" });
	});

	it("renders all configured menu items", () => {
		render(<Navbar />);

		menuItems.forEach((item) => {
			expect(screen.getByRole("link", { name: item.label })).toBeInTheDocument();
		});

		const aboutAnchor = screen.getByRole("link", { name: "About" });
		expect(aboutAnchor).toHaveAttribute("href", "#about");
		expect(aboutAnchor).toHaveClass("active");
	});

	it("marks route links active when the location matches", () => {
		mockUseLocation.mockReturnValue({ pathname: "/blog" });
		render(<Navbar />);

		const blogLink = screen.getByRole("link", { name: "Blog" });
		expect(blogLink).toHaveClass("active");
	});

	it("updates the active section when a section link is clicked", async () => {
		render(<Navbar />);

		const skillsLink = screen.getByRole("link", { name: "Skills" });
		expect(skillsLink).not.toHaveClass("active");

		await userEvent.click(skillsLink);
		expect(skillsLink).toHaveClass("active");

		const aboutLink = screen.getByRole("link", { name: "About" });
		expect(aboutLink).not.toHaveClass("active");
	});

	it("clears the active section state when a route link is clicked", async () => {
		render(<Navbar />);

		const aboutLink = screen.getByRole("link", { name: "About" });
		expect(aboutLink).toHaveClass("active");

		await userEvent.click(screen.getByRole("link", { name: "Blog" }));
		expect(aboutLink).not.toHaveClass("active");
	});
});

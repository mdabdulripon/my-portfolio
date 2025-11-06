import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Blog from "../Blog";

const mockNavigate = jest.fn();

jest.mock(
	"react-router-dom",
	() => ({
		useNavigate: () => mockNavigate,
	}),
	{ virtual: true }
);

describe("Blog", () => {
	beforeEach(() => {
		mockNavigate.mockClear();
	});

	it("renders blog placeholder content", () => {
		render(<Blog />);

		expect(screen.getByRole("heading", { level: 1, name: "Blog" })).toBeInTheDocument();
		expect(screen.getByRole("heading", { level: 2, name: /coming soon/i })).toBeInTheDocument();
		expect(
			screen.getByText(/exciting technical articles and project insights/i)
		).toBeInTheDocument();
	});

	it("navigates back home when the button is clicked", async () => {
		render(<Blog />);

		await userEvent.click(screen.getByRole("button"));
		expect(mockNavigate).toHaveBeenCalledWith("/");
	});

	it("adjusts button styles on hover interactions", () => {
		render(<Blog />);

		const button = screen.getByRole("button");
		const reactPropsKey = Object.keys(button).find((key) => key.startsWith("__reactProps$"));
		expect(reactPropsKey).toBeDefined();

		const { onMouseOver, onMouseOut } = button[reactPropsKey];
		const event = { target: { style: {} } };

		onMouseOver(event);
		expect(event.target.style.backgroundColor).toBe("#9ac2ff");

		onMouseOut(event);
		expect(event.target.style.backgroundColor).toBe("var(--accent)");
	});
});

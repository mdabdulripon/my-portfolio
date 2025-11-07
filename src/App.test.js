import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Home.js", () => () => <div>Home Component</div>);
jest.mock("./components/Blog.js", () => () => <div>Blog Component</div>);

let mockCurrentPath = "/";

jest.mock(
	"react-router-dom",
	() => ({
		BrowserRouter: ({ children }) => <div data-testid="browser-router">{children}</div>,
		Routes: ({ children }) => <>{children}</>,
		Route: ({ path, element }) => (path === mockCurrentPath ? element : null),
	}),
	{ virtual: true }
);

describe("App routing", () => {
	beforeEach(() => {
		mockCurrentPath = "/";
	});

	it("renders the home route by default", () => {
		render(<App />);
		expect(screen.getByText("Home Component")).toBeInTheDocument();
		expect(screen.queryByText("Blog Component")).not.toBeInTheDocument();
	});

	it("renders the blog route when navigating to /blog", () => {
		mockCurrentPath = "/blog";
		render(<App />);
		expect(screen.getByText("Blog Component")).toBeInTheDocument();
		expect(screen.queryByText("Home Component")).not.toBeInTheDocument();
	});
});

import { render, screen } from "@testing-library/react";
import Aside from "../Aside";

jest.mock("../Intro.js", () => () => <div data-testid="intro-component" />);
jest.mock("../Social.js", () => () => <div data-testid="social-component" />);

describe("Aside", () => {
	it("wraps the intro and social components in an aside", () => {
		render(<Aside />);

		const aside = screen.getByLabelText("Profile & Navigation");
		expect(aside).toBeInTheDocument();
		expect(screen.getByTestId("intro-component")).toBeInTheDocument();
		expect(screen.getByTestId("social-component")).toBeInTheDocument();
	});
});


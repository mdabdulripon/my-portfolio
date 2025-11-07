import { render, screen } from "@testing-library/react";
import Main from "../Main";

jest.mock("../About.js", () => () => <section data-testid="about-component" />);
jest.mock("../Skills.js", () => () => <section data-testid="skills-component" />);
jest.mock("../Experience.js", () => () => <section data-testid="experience-component" />);
jest.mock("../Projects.js", () => () => <section data-testid="projects-component" />);
jest.mock("../Education.js", () => () => <section data-testid="education-component" />);
jest.mock("../Contact.js", () => () => <section data-testid="contact-component" />);

describe("Main", () => {
	it("renders all primary sections in order", () => {
		render(<Main />);

		const main = screen.getByRole("main");
		expect(main).toBeInTheDocument();
		expect(screen.getByTestId("about-component")).toBeInTheDocument();
		expect(screen.getByTestId("skills-component")).toBeInTheDocument();
		expect(screen.getByTestId("experience-component")).toBeInTheDocument();
		expect(screen.getByTestId("projects-component")).toBeInTheDocument();
		expect(screen.getByTestId("education-component")).toBeInTheDocument();
		expect(screen.getByTestId("contact-component")).toBeInTheDocument();
	});
});


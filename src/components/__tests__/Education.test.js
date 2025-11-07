import { render, screen } from "@testing-library/react";
import Education from "../Education";
import educationData from "../../data/education.json";

describe("Education", () => {
	it("displays each education record with school, degree, and GPA", () => {
		render(<Education />);

		expect(screen.getByText("Education")).toBeInTheDocument();

		educationData.forEach((edu) => {
			expect(screen.getByText(edu.school)).toBeInTheDocument();
			expect(screen.getByText(edu.degree)).toBeInTheDocument();
			expect(screen.getByText(`GPA: ${edu.gpa}`)).toBeInTheDocument();
		});
	});
});


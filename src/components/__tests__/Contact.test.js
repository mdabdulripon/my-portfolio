import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import contactData from "../../data/contact.json";

describe("Contact", () => {
	it("shows contact location, phone, and email link", () => {
		render(<Contact />);

		expect(screen.getByText("Contact")).toBeInTheDocument();
		expect(screen.getByText(contactData.location)).toBeInTheDocument();
		expect(screen.getByText(contactData.phone)).toBeInTheDocument();

		const emailLink = screen.getByRole("link", { name: contactData.email });
		expect(emailLink).toHaveAttribute(`href`, `mailto:${contactData.email}`);
	});
});

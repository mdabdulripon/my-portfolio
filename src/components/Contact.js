import React from "react";
import contact from "../data/contact.json"; // adjust the path as needed

export default function Contact() {
	return (
		<section id="contact">
			<div className="section-header">Contact</div>
			<p>
				<strong>Location:</strong> {contact.location}
			</p>
			<p>
				<strong>Phone:</strong> {contact.phone}
			</p>
			<p>
				<strong>Email:</strong>{" "}
				<a href={`mailto:${contact.email}`}>{contact.email}</a>
			</p>
		</section>
	);
}

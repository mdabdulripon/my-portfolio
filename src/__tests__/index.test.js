import React from "react";

jest.mock("../App", () => function MockApp() {
	return null;
});

const mockRender = jest.fn();

jest.mock("react-dom/client", () => ({
	createRoot: jest.fn(() => ({ render: mockRender })),
}));

describe("index entrypoint", () => {
	beforeEach(() => {
		document.body.innerHTML = '<div id="root"></div>';
		mockRender.mockClear();
		const { createRoot } = require("react-dom/client");
		createRoot.mockClear();
	});

	it("boots the application with StrictMode", () => {
		jest.isolateModules(() => {
			require("../index");
		});

		const { createRoot } = require("react-dom/client");
		expect(createRoot).toHaveBeenCalledWith(document.getElementById("root"));

		expect(mockRender).toHaveBeenCalledTimes(1);
		const renderedTree = mockRender.mock.calls[0][0];
		expect(renderedTree.type).toBe(React.StrictMode);

		const strictModeChildren = Array.isArray(renderedTree.props.children)
			? renderedTree.props.children
			: [renderedTree.props.children];
		expect(strictModeChildren).toHaveLength(1);
		expect(strictModeChildren[0].type.name).toBe("MockApp");
	});
});

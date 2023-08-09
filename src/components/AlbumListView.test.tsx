import { render, screen } from "@testing-library/react";
import { AlbumListView } from "./AlbumListView";
import { AlbumContext } from "./AlbumContext";

describe("AlbumListView component", () => {
	it("should render correctly", () => {
		render(
			<AlbumContext.Provider value={{ filter: "", setFilter: () => {} }}>
				<AlbumListView />
			</AlbumContext.Provider>
		);

		// Check if loading message is displayed
		expect(screen.getByText(/LOADING Component/i)).toBeInTheDocument();
	});

	it("should render list", () => {
		render(
			<AlbumContext.Provider value={{ filter: "", setFilter: () => {} }}>
				<AlbumListView />
			</AlbumContext.Provider>
		);

		// screen.logTestingPlaygroundURL();

		// Check if loading message is displayed
		expect(screen.getByRole("textbox")).toBeInTheDocument();
		expect(screen.getByText(/LOADING Component/i)).toBeInTheDocument();
	});
});

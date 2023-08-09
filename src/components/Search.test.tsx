import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Search } from "./Search";
import { AlbumContext } from "./AlbumContext";

// Mock AlbumContext values
const mockSetFilter = jest.fn();
const mockFilter = "test filter";

const mockAlbumContext = {
	filter: mockFilter,
	setFilter: mockSetFilter,
};

describe("Search component", () => {
	it("should render correctly", () => {
		render(
			<AlbumContext.Provider value={mockAlbumContext}>
				<Search />
			</AlbumContext.Provider>
		);

		const searchInput = screen.getByRole("textbox");
		expect(searchInput).toBeInTheDocument();
	});

	it("should have text content", async () => {
		render(<Search />);

		const searchInput = screen.getByRole("textbox");
		await user.click(searchInput);
		await user.keyboard("best dev");

		await waitFor(() => {
			expect(searchInput).toHaveValue("best dev");
		});
	});
});

import { render, screen, fireEvent } from "@testing-library/react";
import { Album } from "./Album";

const mockAlbum = {
	id: 1,
	title: "Sample Album",
	thumbnailUrl: "https://example.com/thumbnail.jpg",
};

test("should render album details", () => {
	const mockOnSelect = jest.fn();

	render(<Album {...mockAlbum} onSelect={mockOnSelect} />);

	const titleElement = screen.getByText("Sample Album");
	const selectButton = screen.getByText("Select");
	const imageElement = screen.getByAltText("Sample Album");

	expect(titleElement).toBeInTheDocument();
	expect(selectButton).toBeInTheDocument();
	expect(imageElement).toBeInTheDocument();

	fireEvent.click(selectButton);
	expect(mockOnSelect).toHaveBeenCalledTimes(1);
	expect(mockOnSelect).toHaveBeenCalledWith("Sample Album");
});

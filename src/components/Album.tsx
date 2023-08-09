import { Image } from "./Image";
import { AlbumProps } from "../types";
import { Button } from "@material-ui/core";

export const Album = ({
	title,
	thumbnailUrl,
	onSelect,
}: Pick<AlbumProps, "id" | "title" | "thumbnailUrl"> & {
	onSelect: (title: string) => void;
}) => {
	return (
		<div>
			<li>{title}</li>
			<Button
				onClick={() => onSelect(title)}
				variant="contained"
				color="primary"
			>
				Select
			</Button>
			<Image src={thumbnailUrl} alt={title} />
		</div>
	);
};

import { Image } from "./Image";
import { AlbumProps } from "../types";

export const Album = ({
	title,
	thumbnailUrl,
}: Pick<AlbumProps, "id" | "title" | "thumbnailUrl">) => {
	return (
		<>
			<Image src={thumbnailUrl} alt={title} />
			<li>{title}</li>
		</>
	);
};

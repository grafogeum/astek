import { useState, useEffect } from "react";
import { AlbumProps } from "../types";
import { API_URL } from "../constants/constants";

interface AlbumContainerProps {
	render: (data: {
		data: AlbumProps[];
		loading: boolean;
		error: any;
	}) => React.ReactNode;
}

export const AlbumsList: React.FC<AlbumContainerProps> = ({ render }) => {
	const [albums, setAlbums] = useState<{
		data: AlbumProps[];
		loading: boolean;
		error: any;
	}>({
		data: [],
		loading: true,
		error: null,
	});

	useEffect(() => {
		const getAlbums = async () => {
			try {
				const response = await fetch(API_URL);
				const results: AlbumProps[] = await response.json();

				setAlbums({
					data: results,
					loading: false,
					error: null,
				});
			} catch (error) {
				setAlbums({
					data: [],
					loading: false,
					error: error,
				});
			}
		};

		getAlbums();
	}, []);

	return <>{render(albums)}</>;
};

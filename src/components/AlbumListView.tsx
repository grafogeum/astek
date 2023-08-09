import { Fragment, useEffect, useState } from "react";
import { AlbumsList } from "../containers/AlbumsList";
import styled from "@emotion/styled";
import { Search } from "./Search";
import { Album } from "./Album";

// import { withLoadingAndError } from "../shared/withLoadingAndError";
// const AlbumListWithLoadingAndError = withLoadingAndError(AlbumsList);

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	height: 100%;
	width: 100%;
	padding: 1rem;
`;

export const AlbumListView = () => {
	const [filter, setFilter] = useState("");
	const [selectedAlbum, setSelectedAlbum] = useState("");

	return (
		<main>
			<Search filter={filter} setFilter={setFilter} />
			<AlbumsList
				render={({ data, loading, error }) => {
					const filteredData = data.filter((item) =>
						item.title.toLowerCase().includes(filter.toLowerCase())
					);
					return (
						<Container>
							{loading ? (
								<p>LOADING Component •••</p>
							) : error ? (
								<p>Error:☞ {error.message}</p>
							) : (
								<ul>
									{filteredData
										.slice(0, 20)
										.map(({ id, title, thumbnailUrl }) => (
											<Fragment key={[id, title].join("")}>
												<Album
													id={id}
													title={title}
													thumbnailUrl={thumbnailUrl}
													onSelect={(title) => setSelectedAlbum(title)}
												/>
											</Fragment>
										))}
								</ul>
							)}
							{selectedAlbum && <h4>{selectedAlbum}</h4>}
						</Container>
					);
				}}
			/>
		</main>
	);
};

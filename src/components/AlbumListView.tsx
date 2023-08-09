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

type selectedAlbum = {
	title: string;
	url: string;
};

export const AlbumListView = () => {
	const [filter, setFilter] = useState("");
	const [selectedAlbum, setSelectedAlbum] = useState<selectedAlbum | null>(
		null
	);

	return (
		<main>
			<Search filter={filter} setFilter={setFilter} />
			<AlbumsList
				render={({ data, loading, error }) => {
					return (
						<Container>
							{loading ? (
								<p>LOADING Component •••</p>
							) : error ? (
								<p>Error:☞ {error.message}</p>
							) : (
								<ul>
									{data
										.filter((item) =>
											item.title.toLowerCase().includes(filter.toLowerCase())
										)
										.slice(0, 20)
										.map(({ id, title, thumbnailUrl, url }) => (
											<Fragment key={[id, title].join("")}>
												<Album
													id={id}
													title={title}
													thumbnailUrl={thumbnailUrl}
													onSelect={(title) => setSelectedAlbum({ title, url })}
												/>
											</Fragment>
										))}
								</ul>
							)}
							{selectedAlbum && (
								<>
									<h4>{selectedAlbum.title}</h4>
									<div>
										<img src={selectedAlbum.url} alt="album" />
									</div>
								</>
							)}
						</Container>
					);
				}}
			/>
		</main>
	);
};

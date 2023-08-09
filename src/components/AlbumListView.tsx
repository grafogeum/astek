import { Fragment, useState } from "react";
import { AlbumsList } from "../containers/AlbumsList";
import styled from "@emotion/styled";
import { Search } from "./Search";
import { Album } from "./Album";
import { AlbumContext } from "./AlbumContext";
import { Typography, Avatar } from "@material-ui/core";

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

const AvatarStyleOverride = { width: "200px", height: "auto" };

export const AlbumListView = () => {
	const [filter, setFilter] = useState("");
	const [selectedAlbum, setSelectedAlbum] = useState<selectedAlbum | null>(
		null
	);

	return (
		<AlbumContext.Provider value={{ filter, setFilter }}>
			<main>
				<Search />
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
														onSelect={(title) =>
															setSelectedAlbum({ title, url })
														}
													/>
												</Fragment>
											))}
									</ul>
								)}
								{selectedAlbum && (
									<>
										<Typography variant="h4">{selectedAlbum.title}</Typography>
										<div>
											<Avatar
												variant="circular"
												src={selectedAlbum.url}
												alt="album"
												style={AvatarStyleOverride}
											/>
										</div>
									</>
								)}
							</Container>
						);
					}}
				/>
			</main>
		</AlbumContext.Provider>
	);
};

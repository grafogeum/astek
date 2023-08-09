import { Fragment, useState } from "react";
import { AlbumsList } from "../containers/AlbumsList";
import { Search } from "./Search";
import { Album } from "./Album";

// import { withLoadingAndError } from "../shared/withLoadingAndError";
// const AlbumListWithLoadingAndError = withLoadingAndError(AlbumsList);

export const AlbumListView = () => {
	const [filter, setFilter] = useState("");

	return (
		<main>
			<Search filter={filter} setFilter={setFilter} />
			<AlbumsList
				render={({ data, loading, error }) => {
					const filteredData = data.filter((item) =>
						item.title.toLowerCase().includes(filter.toLowerCase())
					);
					return (
						<>
							{loading ? (
								<p>LOADING Component •••</p>
							) : error ? (
								<p>Error:☞ {error.message}</p>
							) : (
								<ul>
									{filteredData.map(({ id, title, thumbnailUrl }) => (
										<Fragment key={[id, title].join("")}>
											<Album
												id={id}
												title={title}
												thumbnailUrl={thumbnailUrl}
											/>
										</Fragment>
									))}
								</ul>
							)}
						</>
					);
				}}
			/>
		</main>
	);
};

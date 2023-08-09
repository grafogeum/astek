import { useState, ChangeEvent } from "react";
import styled from "@emotion/styled";

export const SearchInput = styled.input`
	padding: 0.7rem 1rem;
	border: 1px solid #8c55da;
	font: 1.5rem "Verdana", Merriweather, serif;
	border-radius: 15px;
	width: 25rem;
`;

export const Search = ({
	filter,
	setFilter,
}: {
	filter: any;
	setFilter: any;
}) => {
	const [search, setSearch] = useState("");

	const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setSearch(target.value);
		setFilter(search);
	};

	return (
		<>
			<SearchInput
				type="text"
				placeholder="Search"
				onChange={handleSearch}
				value={search}
			/>
		</>
	);
};

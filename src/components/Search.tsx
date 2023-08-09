import { useContext, ChangeEvent } from "react";
import styled from "@emotion/styled";
import { AlbumContext } from "./AlbumContext";
import { SEARCH_INPUT } from "../constants/constants";

export const SearchInput = styled.input`
	padding: 0.7rem 1rem;
	border: 1px solid #8c55da;
	font: 1.5rem "Verdana", Merriweather, serif;
	border-radius: 15px;
	width: 90vw;
`;

export const Search = () => {
	const { filter, setFilter } = useContext(AlbumContext);

	const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setFilter && setFilter(target.value);
	};

	return (
		<>
			<SearchInput
				type={SEARCH_INPUT.type}
				placeholder={SEARCH_INPUT.placeholder}
				value={filter}
				onChange={handleSearch}
			/>
		</>
	);
};

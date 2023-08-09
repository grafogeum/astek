import styled from "@emotion/styled";

const StyledImage = styled.img`
	height: 150px;
	max-width: 150px;
	overflow: hidden;
	display: block;
	width: 100%;
`;

interface ImageProps {
	src: string;
	alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => (
	<StyledImage src={src} alt={alt} />
);

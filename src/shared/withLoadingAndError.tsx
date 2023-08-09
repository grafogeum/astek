import { ComponentType } from "react";

interface WithLoadingAndErrorProps {
	loading: boolean;
	error: any;
}

export const withLoadingAndError = (WrappedComponent: React.FC<any>) => {
	const withHandleErrorHOC = ({
		loading,
		...passThroughProps
	}: {
		loading: boolean;
	}) => {
		if (loading) return <div>Loading </div>;
		return <WrappedComponent {...passThroughProps} />;
	};

	// withHandleErrorHOC.displayName = `withHandleError(${
	// 	WrappedComponent.displayName || WrappedComponent.name || "Component"
	// })`;

	return withHandleErrorHOC;
};

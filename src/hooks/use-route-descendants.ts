import { useMatch, useRouter } from "@tanstack/react-router";

export function useRouteDescendants() {
	const match = useMatch({ strict: false });
	const { flatRoutes } = useRouter();
	const children = flatRoutes.filter(
		(r) =>
			r.fullPath !== match.fullPath && r.fullPath.startsWith(match.fullPath),
	);
	children.sort(
		(a, b) =>
			a.options.staticData?.linkTitle?.localeCompare(
				b.options.staticData?.linkTitle ?? "",
			) || 0,
	);
	return children;
}

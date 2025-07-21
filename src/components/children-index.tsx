import { useMatch, useRouter } from "@tanstack/react-router";
import { LinkButton } from "./link-button";

export function ChildrenIndex() {
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

	return (
		<ul>
			{children.map((r) => (
				<li key={r.id}>
					<LinkButton to={r.fullPath} variant="link">
						{r.options.staticData?.linkTitle}
					</LinkButton>
					{r.options.staticData?.linkDescription}
				</li>
			))}
		</ul>
	);
}

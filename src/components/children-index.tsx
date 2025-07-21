import { useRouteChildren } from "~/hooks/use-route-children";
import { LinkButton } from "./link-button";

export function ChildrenIndex() {
	const children = useRouteChildren();

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

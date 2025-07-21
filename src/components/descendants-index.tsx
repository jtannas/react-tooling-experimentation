import { useRouteDescendants } from "~/hooks/use-route-descendants";
import { LinkButton } from "./link-button";

export function DescendantsIndex() {
	const children = useRouteDescendants();

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

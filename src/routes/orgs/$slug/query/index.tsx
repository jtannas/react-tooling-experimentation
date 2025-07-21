import { createFileRoute, useRouter } from "@tanstack/react-router";
import { LinkButton } from "~/components/link-button";

export const Route = createFileRoute("/orgs/$slug/query/")({
	staticData: { linkTitle: "Tanstack Query" },
	component: RouteComponent,
});

function RouteComponent() {
	const { flatRoutes } = useRouter();
	const children = flatRoutes.filter(
		(r) =>
			r.fullPath !== Route.fullPath && r.fullPath.startsWith(Route.fullPath),
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

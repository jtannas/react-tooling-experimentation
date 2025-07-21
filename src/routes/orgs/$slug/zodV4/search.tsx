import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/search")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Search Param",
		linkDescription: "Validating Search Parameters",
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zod/search"!</div>;
}

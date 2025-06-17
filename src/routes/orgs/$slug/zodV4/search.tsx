import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/search")({
	component: RouteComponent,
	loader: () => ({ breadcrumb: "Search Param" }),
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zod/search"!</div>;
}

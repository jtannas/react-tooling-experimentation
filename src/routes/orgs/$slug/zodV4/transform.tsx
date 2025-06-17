import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/transform")({
	component: RouteComponent,
	loader: () => ({ breadcrumb: "Transform" }),
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zodV4/transform"!</div>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/path/$foo")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Path Params",
		linkDescription: "Validating Path Parameters",
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zod/path/$foo"!</div>;
}

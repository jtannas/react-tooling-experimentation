import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/path/$foo")({
	component: RouteComponent,
	staticData: { title: "Path Params" },
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zod/path/$foo"!</div>;
}

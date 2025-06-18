import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/async")({
	component: RouteComponent,
	staticData: { title: "Async" },
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zodV4/async"!</div>;
}

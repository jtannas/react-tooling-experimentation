import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/async")({
	component: RouteComponent,
	staticData: { linkTitle: "Async", linkDescription: "Demo of validating streamed data" },
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zodV4/async"!</div>;
}

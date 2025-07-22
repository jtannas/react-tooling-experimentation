import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms/async-init")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Async Initial Values",
		linkDescription:
			"Getting initial values from an async resource (e.g. a database record)",
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/forms/async-init"!</div>;
}

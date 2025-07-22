import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms/component-library")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Table Components",
		linkDescription:
			"Demo of injecting your component library into a custom hook",
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/forms/component-library"!</div>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms/linked-fields")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Linked Fields",
		linkDescription:
			"Handling when the validity of one field depends on another field",
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/forms/linked-fields"!</div>;
}

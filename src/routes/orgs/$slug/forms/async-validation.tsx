import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms/async-validation")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Async Validation",
		linkDescription:
			"Validating Data Asynchronously (e.g. via API call - 'that username has been taken')",
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/forms/async-validation"!</div>;
}

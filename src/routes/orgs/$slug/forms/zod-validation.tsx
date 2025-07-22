import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms/zod-validation")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Zod Validation",
		linkDescription: "Validating Form Data Using Zod",
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/forms/zod-validation"!</div>;
}

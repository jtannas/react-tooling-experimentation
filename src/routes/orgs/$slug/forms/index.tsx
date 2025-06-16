import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms/")({
	loader: () => ({ breadcrumb: "Tanstack Form" }),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>ToDo: Test Tanstack Form</div>;
}

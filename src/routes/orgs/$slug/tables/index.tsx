import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/tables/")({
	loader: () => ({ breadcrumb: "Tanstack Table" }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>ToDo: Test implementations of advance Tanstack Table features</div>
	);
}

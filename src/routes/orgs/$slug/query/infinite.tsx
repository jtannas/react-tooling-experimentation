import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/query/infinite")({
	loader: () => ({ breadcrumb: "Infinite Query" }),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>ToDo: Infinite Query</div>;
}

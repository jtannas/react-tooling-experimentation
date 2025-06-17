import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/query/")({
	staticData: { title: "Tanstack Query" },
	component: RouteComponent,
});

function RouteComponent() {
	return <div>ToDo: Test advanced features on Tanstack Query</div>;
}

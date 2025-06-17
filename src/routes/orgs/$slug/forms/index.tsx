import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms/")({
	staticData: { title: "Tanstack Form" },
	component: RouteComponent,
});

function RouteComponent() {
	return <div>ToDo: Test Tanstack Form</div>;
}

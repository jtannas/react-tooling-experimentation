import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/query/parse")({
	staticData: { title: "Parsing Data" },
	component: RouteComponent,
});

function RouteComponent() {
	return <div>ToDo: Test parsing from incoming JSON into data classes</div>;
}

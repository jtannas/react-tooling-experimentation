import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/query/parse")({
	staticData: {
		linkTitle: "Parsing Data",
		linkDescription: "Demo of parsing incoming data into class objects",
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <div>ToDo: Test parsing from incoming JSON into data classes</div>;
}

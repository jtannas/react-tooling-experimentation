import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/query/infinite")({
	staticData: { linkTitle: "Infinite Query", linkDescription: "Demo of using an infinite query" },
	component: RouteComponent,
});

function RouteComponent() {
	return <div>ToDo: Infinite Query</div>;
}

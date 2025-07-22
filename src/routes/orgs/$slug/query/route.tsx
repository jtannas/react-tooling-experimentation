import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/query")({
	staticData: { linkTitle: "Tanstack Query" },
});

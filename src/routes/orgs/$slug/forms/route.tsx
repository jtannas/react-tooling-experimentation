import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/forms")({
	staticData: { linkTitle: "Tanstack Form" },
});

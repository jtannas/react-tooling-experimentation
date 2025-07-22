import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/stores")({
	staticData: { linkTitle: "Data Stores" },
});

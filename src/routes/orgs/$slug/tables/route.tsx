import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/tables")({
	staticData: { linkTitle: "Tables" },
});

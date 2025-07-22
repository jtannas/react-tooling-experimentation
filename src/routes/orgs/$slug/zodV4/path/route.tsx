import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/zodV4/path")({
	staticData: { linkTitle: "Path Parameters" },
});

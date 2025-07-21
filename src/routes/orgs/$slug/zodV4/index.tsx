import { createFileRoute } from "@tanstack/react-router";
import { ChildrenIndex } from "~/components/children-index";

export const Route = createFileRoute("/orgs/$slug/zodV4/")({
	component: ChildrenIndex,
	staticData: { linkTitle: "Zod V4" },
});

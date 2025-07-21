import { createFileRoute } from "@tanstack/react-router";
import { ChildrenIndex } from "~/components/children-index";

export const Route = createFileRoute("/orgs/$slug/tables/")({
	component: ChildrenIndex,
	staticData: { linkTitle: "Tanstack Table" },
});

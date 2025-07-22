import { createFileRoute } from "@tanstack/react-router";
import { ChildrenIndex } from "~/components/children-index";

export const Route = createFileRoute("/orgs/$slug/query/")({
	component: ChildrenIndex,
	staticData: { linkTitle: null }, // inherit from `route.tsx`
});

import { createFileRoute } from "@tanstack/react-router";
import { ChildrenIndex } from "~/components/children-index";

export const Route = createFileRoute("/orgs/$slug/stores/")({
	component: ChildrenIndex,
	staticData: { linkTitle: null }, // inherits from `route.tsx`
});

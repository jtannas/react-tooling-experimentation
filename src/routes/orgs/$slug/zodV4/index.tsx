import { createFileRoute } from "@tanstack/react-router";
import { DescendantsIndex } from "~/components/descendants-index";

export const Route = createFileRoute("/orgs/$slug/zodV4/")({
	component: DescendantsIndex,
	staticData: { linkTitle: "Zod V4" },
});

import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod/v4";

const productSearchSchema = z.object({
	page: z.number().default(1),
	filter: z.string().default(""),
	sort: z.enum(["newest", "oldest", "price"]).default("newest"),
});

export const Route = createFileRoute("/orgs/$slug/zodV4/search")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Search Param",
		linkDescription: "Validating Search Parameters",
	},
	validateSearch: zodValidator(productSearchSchema),
});

function RouteComponent() {
	const { filter, page, sort } = Route.useSearch();
	return (
		<div>
			<ul className="list-disc pl-6">
				<li>Filter: {filter}</li>
				<li>Page: {page}</li>
				<li>Sort: {sort}</li>
			</ul>
		</div>
	);
}

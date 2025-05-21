import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const aboutSearchSchema = z.object({
	example: z.enum(["foo", "bar", "baz"]),
});

export const Route = createFileRoute(
	"/(pathlessLayoutDemos)/_pathlessLayout/about",
)({
	component: About,
	validateSearch: aboutSearchSchema,
});

function About() {
	const { example } = Route.useSearch();
	return (
		<div className="p-2">
			Hello from About!
			<p>Search Param: {example}</p>
		</div>
	);
}

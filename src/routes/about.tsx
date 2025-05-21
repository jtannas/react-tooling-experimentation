import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const aboutSearchSchema = z.object({
	allowed: z.enum(["foo", "bar", "baz"]),
});

export const Route = createFileRoute(
	"/about",
)({
	component: About,
	validateSearch: aboutSearchSchema,
});

function About() {
	const { allowed } = Route.useSearch();
	return (
		<div className="p-2">
			Hello from About!
			<p>Search Param: {allowed}</p>
		</div>
	);
}

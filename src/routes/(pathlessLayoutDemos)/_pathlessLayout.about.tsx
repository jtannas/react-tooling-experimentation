import { createFileRoute, Link, useBlocker } from "@tanstack/react-router";
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

	const { proceed, status, reset } = useBlocker({
		shouldBlockFn: ({ current, next }) => {
			return current.fullPath === "/about" && next.fullPath === "/sample";
		},
		withResolver: true,
	});

	if (status === "blocked")
		return (
			<p>
				You have been blocked!
				<br />
				<button type="button" className="block bg-gray-500" onClick={reset}>
					Reset block
				</button>
				<button type="button" className="block bg-green-500" onClick={proceed}>
					Proceed to /sample
				</button>
			</p>
		);

	return (
		<div className="p-2">
			Hello from About!
			<p>Search Param: {example}</p>
			<Link to="/sample" className="bg-red-500">
				Blocked link to Sample
			</Link>
		</div>
	);
}

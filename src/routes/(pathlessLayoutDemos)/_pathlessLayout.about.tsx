import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const aboutSearchSchema = z.object({
	example: z.enum(["foo", "bar", "baz"]).catch("foo"),
});

export const Route = createFileRoute(
	"/(pathlessLayoutDemos)/_pathlessLayout/about",
)({
	component: About,
	validateSearch: aboutSearchSchema,
});

function About() {
	return <div className="p-2">Hello from About!</div>;
}

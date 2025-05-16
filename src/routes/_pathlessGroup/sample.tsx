import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessGroup/sample")({
	component: Sample,
});

function Sample() {
	return <div className="p-2">Hello from Sample!</div>;
}

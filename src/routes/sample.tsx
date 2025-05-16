import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sample")({
	component: Sample,
});

function Sample() {
	return <div className="p-2">Hello from Sample!</div>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/theme")({
	head: () => ({
		meta: [{ title: "Theme" }],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/settings/theme"!</div>;
}

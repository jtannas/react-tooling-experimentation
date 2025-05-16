import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(dynamicDemos)/dynamic_/unnest")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			This component ignores the layout of `/dynamic` due to the underscore
		</div>
	);
}

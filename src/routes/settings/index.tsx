import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/settings"!
			<br />
			<Link
				from={Route.fullPath}
				to="./theme"
				className="underline text-blue-500"
				search={{ test: "Hello World" }}
				preload="intent"
				viewTransition={true}
			>
				Link to /settings/theme
			</Link>
		</div>
	);
}

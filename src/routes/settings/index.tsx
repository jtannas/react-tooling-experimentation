import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/settings"!
			<br />
			<Link to="/settings/theme" className="underline text-blue-500">
				Link to /settings/theme
			</Link>
		</div>
	);
}

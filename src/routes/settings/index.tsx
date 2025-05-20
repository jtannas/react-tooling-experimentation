import { createFileRoute, Link } from "@tanstack/react-router";
import { Route as themeRoute } from "./theme";

export const Route = createFileRoute("/settings/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/settings"!
			<br />
			<Link to={themeRoute.to} className="underline text-blue-500">
				Link to /settings/theme
			</Link>
		</div>
	);
}

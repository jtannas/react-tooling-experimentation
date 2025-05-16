import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessGroup")({
	component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
	return (
		<div>
			<h1>Pathless Group</h1>
			<Outlet />
		</div>
	);
}

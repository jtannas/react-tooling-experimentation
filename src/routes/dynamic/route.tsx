import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dynamic")({
	component: RouteLayoutComponent,
});

function RouteLayoutComponent() {
	return (
		<div>
			<h1>This is the dynamic layout component</h1>
			<Outlet />
		</div>
	);
}

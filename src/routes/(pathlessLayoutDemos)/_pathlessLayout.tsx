import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(pathlessLayoutDemos)/_pathlessLayout")({
	component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
	return (
		<div>
			<h1>Pathless layout</h1>
			<Outlet />
		</div>
	);
}

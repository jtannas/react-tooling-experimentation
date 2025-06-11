import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/landing")({
	loader: () => ({ breadcrumb: "Landing" }),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex items-center justify-center flex-col">
			<h1 className="text-4xl font-extrabold">
				Welcome to your new organization!
			</h1>
			<Link className="text-blue-500" to="..">
				Go To Dashboard
			</Link>
		</div>
	);
}

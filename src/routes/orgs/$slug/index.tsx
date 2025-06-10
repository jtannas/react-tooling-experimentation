import { createFileRoute, Link } from "@tanstack/react-router";
import { useAppOrg } from "~/integrations/clerk/useAppOrg";

export const Route = createFileRoute("/orgs/$slug/")({
	component: RouteComponent,
});

function RouteComponent() {
	const org = useAppOrg();

	return (
		<div className="flex items-center justify-center flex-col">
			<h1 className="text-4xl font-extrabold">
				Welcome to the {org.name} dashboard!
			</h1>
			<Link className="text-blue-500" from={Route.fullPath} to="./landing">
				Go To Landing Page
			</Link>
		</div>
	);
}

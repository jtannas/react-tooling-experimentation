import { createFileRoute } from "@tanstack/react-router";
import { LinkButton } from "~/components/link-button";

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

			<LinkButton to=".." variant="secondary">
				Go To Main Page
			</LinkButton>
		</div>
	);
}

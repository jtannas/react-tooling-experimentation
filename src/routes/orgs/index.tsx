import { OrganizationList } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex items-center justify-center">
			<OrganizationList
				hidePersonal
				afterSelectOrganizationUrl="/orgs/:slug"
				afterCreateOrganizationUrl="/orgs/:slug/landing"
			/>
		</div>
	);
}

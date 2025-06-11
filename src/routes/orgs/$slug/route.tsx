import {
	useAuth,
	useOrganization,
	useOrganizationList,
} from "@clerk/clerk-react";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useLayoutEffect } from "react";
import { OrgContext } from "~/integrations/clerk/useAppOrg";

export const Route = createFileRoute("/orgs/$slug")({
	loader: () => ({ breadcrumb: "Home" }),
	component: RouteComponent,
});

function RouteComponent() {
	const { setActive, isLoaded } = useOrganizationList();
	const { orgSlug } = useAuth();
	const { slug: urlSlug } = Route.useParams();
	const { organization } = useOrganization();
	useLayoutEffect(() => {
		if (!isLoaded) return;
		if (orgSlug !== urlSlug) setActive({ organization: urlSlug });
	}, [isLoaded, orgSlug, urlSlug, setActive]);

	if (!isLoaded) return <p>Loading organization...</p>;
	if (!organization)
		return (
			<div>
				<p>404: Organization Not Found</p>
				<Link className="text-blue-500" to="/orgs">
					Change Organization
				</Link>
			</div>
		);
	return (
		<OrgContext.Provider value={{ org: organization }}>
			<Outlet />
		</OrgContext.Provider>
	);
}

import {
	CreateOrganization,
	useOrganization,
	useOrganizationList,
} from "@clerk/clerk-react";
import { createFileRoute, useLayoutEffect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const { organization, isLoaded } = useOrganization();
	const { userMemberships } = useOrganizationList({ userMemberships: true });
	const navigate = Route.useNavigate();
	useLayoutEffect(() => {
		if (isLoaded && organization?.slug)
			navigate({ to: "/orgs/$slug", params: { slug: organization.slug } });
		if (userMemberships.count) navigate({ to: "/orgs" });
	}, [isLoaded, userMemberships.count, organization?.slug]);

	if (!isLoaded || userMemberships.isLoading)
		return <p>Loading Organizations...</p>;
	if (userMemberships.isError) return <p>Error While Loading Organizations!</p>;

	return (
		<div className="flex items-center justify-center">
			<h1 className="font-extrabold text-4xl p-4">
				Welcome to Serious-Business-Application!
			</h1>
			<h2 className="font-bold text-2xl">
				The market leading flux transmogrification administration SAAS platform
			</h2>

			<p>Create an organization to proceed</p>
			<CreateOrganization />
		</div>
	);
}

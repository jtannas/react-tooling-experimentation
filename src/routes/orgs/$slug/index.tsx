import { createFileRoute } from "@tanstack/react-router";
import { LinkButton } from "~/components/link-button";
import { useAppOrg } from "~/integrations/clerk/useAppOrg";

export const Route = createFileRoute("/orgs/$slug/")({
	component: RouteComponent,
	staticData: { linkTitle: "(Inherit)" },
});

function RouteComponent() {
	const org = useAppOrg();

	return (
		<div className="flex items-center justify-center flex-col">
			<h1 className="text-4xl font-extrabold">
				Welcome to the {org.name} dashboard!
			</h1>
			<LinkButton from={Route.fullPath} to="./landing" variant="secondary">
				Go To Landing Page
			</LinkButton>
		</div>
	);
}

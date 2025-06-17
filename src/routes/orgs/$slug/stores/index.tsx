import { createFileRoute } from "@tanstack/react-router";
import { LinkButton } from "~/components/link-button";

export const Route = createFileRoute("/orgs/$slug/stores/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<ul>
			<li>
				<LinkButton to="./zustand" from={Route.fullPath} variant="link">
					Zustand
				</LinkButton>
				A well known and reliable data store that uses reducer-style updaters
				bundled directly into the store.
			</li>
			<li>
				<LinkButton to="./tanstack" from={Route.fullPath} variant="link">
					Tanstack Store
				</LinkButton>
				A work-in-progress data store that puts type safety first. It uses
				updater functions but they are not bundled into the store. Promising.
			</li>
		</ul>
	);
}

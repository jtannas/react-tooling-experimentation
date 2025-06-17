import { createFileRoute } from "@tanstack/react-router";
import { LinkButton } from "~/components/link-button";

export const Route = createFileRoute("/orgs/$slug/zodV4/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<ul>
			<li>
				<LinkButton to="./basic" from={Route.fullPath} variant="link">
					Basic
				</LinkButton>
				Basic Zod Validation
			</li>
			<li>
				<LinkButton
					to="./path/$foo"
					from={Route.fullPath}
					variant="link"
					params={{ foo: "abc" }}
				>
					Path
				</LinkButton>
				Validating Path Parameters
			</li>
			<li>
				<LinkButton to="./search" from={Route.fullPath} variant="link">
					Search
				</LinkButton>
				Validating Search Parameters
			</li>
			<li>
				<LinkButton to="./async" from={Route.fullPath} variant="link">
					Async
				</LinkButton>
				Parsing Async Data
			</li>
			<li>
				<LinkButton to="./transform" from={Route.fullPath} variant="link">
					Transform
				</LinkButton>
				Transform & Pipe unvalidated data
			</li>
		</ul>
	);
}

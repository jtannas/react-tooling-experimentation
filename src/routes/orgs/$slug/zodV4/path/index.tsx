import { createFileRoute } from "@tanstack/react-router";
import { LinkButton } from "~/components/link-button";

export const Route = createFileRoute("/orgs/$slug/zodV4/path/")({
	component: RouteComponent,
	staticData: { linkTitle: null }, // inherits from `route.tsx`
});

function RouteComponent() {
	return (
		<div>
			<LinkButton from={Route.fullPath} to="./$foo" params={{ foo: "fizz" }}>
				Fizz Link
			</LinkButton>
			<LinkButton from={Route.fullPath} to="./$foo" params={{ foo: "buzz" }}>
				Buzz Link
			</LinkButton>
			<LinkButton from={Route.fullPath} to="./$foo" params={{ foo: "bang" }}>
				Bang Link
			</LinkButton>
			{/* @ts-expect-error */}
			<LinkButton
				from={Route.fullPath}
				to="./$foo"
				params={{ foo: "invalid" }}
				variant="destructive"
			>
				Invalid Link
			</LinkButton>
		</div>
	);
}

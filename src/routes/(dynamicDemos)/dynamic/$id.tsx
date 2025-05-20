import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(dynamicDemos)/dynamic/$id")({
	component: RouteComponent,
});

function RouteComponent() {
	const { id } = Route.useParams();

	return (
		<div>
			Hello "/dynamic/{id}"!
			<Link
				className="block"
				to="."
				params={(prev) => ({ ...prev, id: id + 1 })}
			>
				Path param is a string by default
			</Link>
		</div>
	);
}

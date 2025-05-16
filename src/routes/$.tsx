import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
	component: RouteComponent,
});

function RouteComponent() {
	const { _splat } = Route.useParams();
	return <div>404: {_splat} Not Found</div>;
}

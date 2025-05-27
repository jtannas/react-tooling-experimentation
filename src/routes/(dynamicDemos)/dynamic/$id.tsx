import { createFileRoute } from "@tanstack/react-router";
import { CustomLink } from "../../../components/CustomLink";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Route = createFileRoute("/(dynamicDemos)/dynamic/$id")({
	component: RouteComponent,
	beforeLoad: () => ({ injectedContext: "Powers" }),
	loader: async ({ params, context }) => {
		await delay(1000);
		return `loaded ${context.sampleContext} ${context.injectedContext} ${params.id}`;
	},
});

function RouteComponent() {
	const { id } = Route.useParams();
	const loaded = Route.useLoaderData();
	return (
		<div>
			Hello "/dynamic/{id}"!
			<CustomLink to="." params={(prev) => ({ ...prev, id: id + 1 })}>
				<p>Path param is a string by default</p>
			</CustomLink>
			<p>{loaded}</p>
		</div>
	);
}

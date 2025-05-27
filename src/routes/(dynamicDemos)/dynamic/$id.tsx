import { createFileRoute } from "@tanstack/react-router";
import { CustomLink } from "../../../components/CustomLink";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Route = createFileRoute("/(dynamicDemos)/dynamic/$id")({
	component: RouteComponent,
	// Note: search parameters are not _directly_ available to the loaders and associated tools
	// This is to prevent putting data into the cache that is tied to a search param without that
	// params being marked as relevant to the loaders.
	// https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#using-search-params-in-loaders
	// It is possible to access them by defining them in the loaderDeps, and the accessing the deps in the loader.
	// This ensures that important search params are explicitly marked as dependencies
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

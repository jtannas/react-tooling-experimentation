import { Await, createFileRoute, useRouter } from "@tanstack/react-router";
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
		const nonAwait = delay(2000).then(() => "I am not awaited");
		const awaited = await delay(250).then(() => "I am awaited");
		return { awaited, nonAwait, params, context };
	},
	pendingMs: 500,
	pendingMinMs: 500,
	pendingComponent: () => <p>Loading...</p>,
	onError: () => console.error("error happened on route loading"),
	onCatch: () => console.error("error occurred within the components"),
	errorComponent: ({ error }) => {
		const router = useRouter();

		// // Fallback to the default ErrorComponent
		// return <ErrorComponent error={error} />

		return (
			<div>
				{error.message}
				<button
					type="button"
					onClick={() => {
						// Invalidate the route to reload the loader, which will also reset the error boundary
						router.invalidate();
					}}
				>
					retry
				</button>
			</div>
		);
	},
});

function RouteComponent() {
	const { id } = Route.useParams();
	const { awaited, nonAwait, context } = Route.useLoaderData();
	return (
		<div>
			Hello "/dynamic/{id}"!
			<CustomLink to="." params={(prev) => ({ ...prev, id: id + 1 })}>
				<p>Path param is a string by default</p>
			</CustomLink>
			<p>Awaited in the loader: {awaited}</p>
			{/* <p>Not awaited in the loader: {nonAwait}</p> */}
			<p>
				Not awaited in the loader:{" "}
				<Await promise={nonAwait} fallback="Loading...">
					{(data) => data}
				</Await>
			</p>
			<p>Params ID: {id}</p>
			<p>Sample Context: {context.sampleContext}</p>
			<p>Injected Context: {context.injectedContext}</p>
		</div>
	);
}

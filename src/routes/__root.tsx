import {
	createRootRouteWithContext,
	HeadContent,
	linkOptions,
	Outlet,
	retainSearchParams,
	Scripts,
	stripSearchParams,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import z from "zod";
import { CustomLink } from "../components/CustomLink";

const rootSearchSchema = z.object({
	root: z.enum(["a", "b", "c"]).catch("a"),
});

const navBarOptions = linkOptions([
	{ to: "/", label: "Home" },
	{ to: "/about", search: { example: "bar" }, label: "About" },
	{ to: "/sample", label: "Sample" },
	{ to: "/settings", label: "Settings" },
	{ to: "/dynamic", label: "Dynamic" },
]);

export const Route = createRootRouteWithContext<{ sampleContext: string }>()({
	head: () => ({
		meta: [
			{
				name: "ReactTestPlatform",
				content: "A platform for testing react tools",
				title: "Home Page",
			},
		],
	}),
	scripts: () => [
		{
			src: "https://cdn.jsdelivr.net/npm/js-hello-world@1.0.0/helloWorld.min.js",
			async: true,
		},
	],
	component: () => (
		<>
			<HeadContent />
			<Scripts />
			<div className="p-2 flex gap-2">
				{navBarOptions.map((option) => (
					<CustomLink {...option} key={option.to}>
						{option.label}
					</CustomLink>
				))}
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
	notFoundComponent: () => <div>404: Not Found</div>,
	validateSearch: rootSearchSchema,
	search: {
		middlewares: [
			stripSearchParams({ root: "a" }),
			retainSearchParams(["root"]), // Known issue: https://github.com/TanStack/router/issues/2845
		],
	},
});

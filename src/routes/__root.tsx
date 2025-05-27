import {
	createRootRoute,
	Link,
	linkOptions,
	Outlet,
	retainSearchParams,
	stripSearchParams,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import z from "zod";

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

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				{navBarOptions.map((option) => (
					<Link {...option} key={option.to} className="[&.active]:font-bold">
						{option.label}
					</Link>
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

import {
	createRootRoute,
	Link,
	Outlet,
	retainSearchParams,
	stripSearchParams,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import z from "zod";

const rootSearchSchema = z.object({
	root: z.enum(["a", "b", "c"]).catch("a"),
});

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{" "}
				<Link
					to="/about"
					className="[&.active]:font-bold"
					search={{ example: "bar" }}
				>
					About
				</Link>
				<Link to="/sample" className="[&.active]:font-bold">
					Sample
				</Link>
				<Link to="/settings" className="[&.active]:font-bold">
					Settings
				</Link>
				<Link to="/dynamic" className="[&.active]:font-bold">
					Dynamic
				</Link>
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

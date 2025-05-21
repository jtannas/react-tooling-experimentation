import {
	createRootRoute,
	Link,
	linkOptions,
	Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const aboutLinkOptions = linkOptions({
	to: "/about",
	className: "[&.active]:font-bold",
	search: { allowed: "foo", notAllowed: "bar" },
});

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<Link {...aboutLinkOptions}>About</Link>
				<Link
					to="/about"
					className="[&.active]:font-bold"
					search={{ allowed: "foo", notAllowed: "bar" }}
				>
					About
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});

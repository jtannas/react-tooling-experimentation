import {
	ClerkLoaded,
	ClerkLoading,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
	useUser,
} from "@clerk/clerk-react";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "~/components/Header";
import ClerkProvider from "~/integrations/clerk/provider.tsx";
import { UserContext } from "~/integrations/clerk/useAppUser";
import TanStackQueryLayout from "~/integrations/tanstack-query/layout.tsx";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	component: () => (
		<ClerkProvider>
			<ClerkLoading>Loading user session...</ClerkLoading>

			<ClerkLoaded>
				<SignedOut>
					<RedirectToSignIn />
				</SignedOut>
				<SignedIn>
					<SignedInComponent />
				</SignedIn>
			</ClerkLoaded>

			<TanStackRouterDevtools />
			<TanStackQueryLayout />
		</ClerkProvider>
	),
});

function SignedInComponent() {
	const { user } = useUser();
	if (!user) throw new Error("Authorization Error!");

	return (
		<UserContext value={{ user }}>
			<Header />
			<div className="[view-transition-name:main-content]">
				<Outlet />
			</div>
		</UserContext>
	);
}

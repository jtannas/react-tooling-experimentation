import {
	ClerkLoaded,
	ClerkLoading,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
	useUser,
} from "@clerk/clerk-react";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppSidebar } from "~/components/app-sidebar";
import { SiteHeader } from "~/components/site-header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
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
			<div className="[--header-height:calc(--spacing(14))]">
				<SidebarProvider className="flex flex-col">
					<SiteHeader />
					<div className="flex flex-1">
						<AppSidebar />
						<SidebarInset>
							<div className="flex flex-1 flex-col gap-4 p-4">
								<div className="grid auto-rows-min gap-4 md:grid-cols-3">
									<div className="bg-muted/50 aspect-video rounded-xl" />
									<div className="bg-muted/50 aspect-video rounded-xl" />
									<div className="bg-muted/50 aspect-video rounded-xl" />
								</div>
								<div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
							</div>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</div>
		</UserContext>
	);
}

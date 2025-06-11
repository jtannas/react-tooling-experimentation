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
import { LoaderCircle } from "lucide-react";
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
			<ClerkLoading>
				<div className="w-screen h-screen flex items-center justify-center">
					<LoaderCircle />
				</div>
			</ClerkLoading>

			<ClerkLoaded>
				<SignedOut>
					<RedirectToSignIn />
				</SignedOut>
				<SignedIn>
					<SignedInComponent />
				</SignedIn>
			</ClerkLoaded>

			<TanStackRouterDevtools position="top-right" />
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
						<SidebarInset className="[view-transition-name:main-content]">
							<Outlet />
						</SidebarInset>
					</div>
				</SidebarProvider>
			</div>
		</UserContext>
	);
}

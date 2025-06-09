import {
	ClerkLoaded,
	RedirectToSignIn,
	SignedIn,
	SignedOut,
	useUser,
} from "@clerk/clerk-react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { UserContext } from "~/integrations/clerk/userProvider";

export const Route = createFileRoute("/_auth")({
	component: () => {
		const { user, isLoaded } = useUser();
		if (!isLoaded) return <p>Loading user...</p>;
		if (!user)
			return (
				<SignedOut>
					<RedirectToSignIn />
				</SignedOut>
			);
		return (
			<ClerkLoaded>
				<SignedIn>
					<UserContext value={{ user }}>
						<Outlet />
					</UserContext>
				</SignedIn>
			</ClerkLoaded>
		);
	},
});

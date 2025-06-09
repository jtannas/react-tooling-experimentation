import type { UserResource } from "@clerk/types";
import { createContext, useContext } from "react";

export const UserContext = createContext<{ user: UserResource } | undefined>(
	undefined,
);

export const useAppUser = () => {
	const context = useContext(UserContext);
	if (!context)
		throw new Error("useAppUser hook called outside of context provider!");
	if (!context.user) throw new Error("Not Signed In!");
	return context.user;
};

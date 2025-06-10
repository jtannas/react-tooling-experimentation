import type { OrganizationResource } from "@clerk/types";
import { createContext, useContext } from "react";

export const OrgContext = createContext<
	{ org: OrganizationResource } | undefined
>(undefined);

export const useAppOrg = () => {
	const context = useContext(OrgContext);
	if (!context)
		throw new Error("useAppOrg hook called outside of context provider!");
	if (!context.org) throw new Error("No Organization Selected!");
	return context.org;
};

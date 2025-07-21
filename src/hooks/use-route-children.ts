import { useMatch, useRouter } from "@tanstack/react-router";
import { escapeRegExp } from "~/lib/utils";

export function useRouteChildren() {
	const match = useMatch({ strict: false });
	const { flatRoutes } = useRouter();
	const directChildRegExp = new RegExp(`^${escapeRegExp(match.fullPath)}[a-z\-]+$`)
   console.log(flatRoutes.map(r => r.fullPath))
   console.log(match.fullPath)
	const children = flatRoutes.filter((r) => directChildRegExp.test(r.fullPath));
	children.sort(
		(a, b) =>
			a.options.staticData?.linkTitle?.localeCompare(
				b.options.staticData?.linkTitle ?? "",
			) || 0,
	);
	return children;
}

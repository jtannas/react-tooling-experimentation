import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod/v4";

const ParamSchema = z.object({
	foo: z.enum(["fizz", "buzz", "bang"]),
});

export const Route = createFileRoute("/orgs/$slug/zodV4/path/$foo")({
	component: RouteComponent,
	staticData: { linkTitle: null },
	parseParams: (params) => ParamSchema.parse(params),
	onError: (error) => {
		if (error?.routerCode === "PARSE_PARAMS")
			throw redirect({ to: ".", params: { foo: "fizz" } });
	},
});

function RouteComponent() {
	return <div>Hello "/orgs/$slug/zod/path/$foo"!</div>;
}

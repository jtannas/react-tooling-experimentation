import { createFileRoute } from "@tanstack/react-router";
import { MyComponent } from "./-MyComponent";

export const Route = createFileRoute("/(dynamicDemos)/dynamic/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/dynamic/"!
			<MyComponent />
		</div>
	);
}

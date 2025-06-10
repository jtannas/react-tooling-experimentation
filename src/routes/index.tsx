import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<h1 className="text-center font-extrabold text-4xl">
			Welcome to Serious-Business-Application!
		</h1>
	);
}

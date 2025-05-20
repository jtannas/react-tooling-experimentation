import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="p-5">
			<h3>Welcome Home!</h3>
			<button
				type="button"
				className="bg-blue-500 w-fit p-2 slop-3"
				onClick={() => console.count("click")}
			>
				MyButton
			</button>
		</div>
	);
}

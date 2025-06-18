import { createFileRoute } from "@tanstack/react-router";
import { create } from "zustand";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/orgs/$slug/stores/zustand")({
	staticData: {
		title: "Zustand",
		description:
			"A well known and reliable data store that uses reducer-style updaters bundled directly into the store.",
	},
	component: RouteComponent,
});

interface BearState {
	// Zustand cannot infer types https://zustand.docs.pmnd.rs/guides/typescript
	bears: number;
	increase: (by: number) => void;
}

const useBearStore = create<BearState>()((set) => ({
	// zustand store can hold state
	bears: 0,
	// they can also contain the functions that manipulate the state; state is not manipulated directly
	increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

function RouteComponent() {
	const { bears, increase } = useBearStore();
	return (
		<div>
			{" "}
			<h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
				Zustand Data Storage Demo
			</h1>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				Bears count: {bears}
			</p>
			<Button onClick={() => increase(1)}>Increase Bear Count</Button>
		</div>
	);
}

/*
Pros:
- Very popular
- Mature Tool
- Similar concept to Redux reducers but with much less boilerplate

Cons
- Typescript support is not derived; Only available from manual generics
*/

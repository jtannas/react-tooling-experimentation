import { createFileRoute } from "@tanstack/react-router";
import { Store, useStore } from "@tanstack/react-store";
import { useEffect } from "react";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/orgs/$slug/stores/tanstack")({
	staticData: { title: "Tanstack" },
	component: RouteComponent,
});

const tanstackStore = new Store(
	// First argument is the initial state of the data
	{
		dogs: 0,
		cats: 0,
		// Unlike Zustand, updater functions are not provided as part of the initial state.
		// I'm guessing that style is incompatible with TypeScript inferring things.
	},
	// (Optional) Second argument is an object of options
	{
		// The `updateFn` can be overwritten, but tbh I don't understand how it works
		updateFn: (previousValue) => (updater) => {
			console.log("about to update state");
			return updater(previousValue);
		},
		// `onUpdate` is a callback run on update.
		// It doesn't accept any arguments but it can somehow reference the parent store, so... funky but useful
		onUpdate: () => {
			console.log("Updated State: ", tanstackStore.state);
		},
	},
);

type Animal = keyof typeof tanstackStore.state;

const increaseAnimalCount = (animal: Animal) => {
	tanstackStore.setState((state) => {
		return {
			...state,
			[animal]: state[animal] + 1,
		};
	});
};

function RouteComponent() {
	// In React, the `useStore` hook is used to access the store in a reactive way
	const store = useStore(
		tanstackStore,
		// 2nd argument is an optional selector to only subscribe to part of the store
		(state) => ({ dogs: state.dogs, cats: state.cats }),
	);

	// Outside of React, there is a subscribe function that runs on change
	useEffect(() => {
		const unsubscribe = tanstackStore.subscribe(() => {
			console.log("The subscribed count is now:", tanstackStore.state);
		});
		return unsubscribe;
	}, []);

	return (
		<div>
			{" "}
			<h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
				Zustand Data Storage Demo
			</h1>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				Cats count: {store.cats}
			</p>
			<Button onClick={() => increaseAnimalCount("cats")}>
				Increase Cat Count
			</Button>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				Dogs count: {store.dogs}
			</p>
			<Button onClick={() => increaseAnimalCount("dogs")}>
				Increase Dog Count
			</Button>
		</div>
	);
}

/*
Pros:
- Built by Tanstack and used under the hood by Tanstack Table
- First class typescript support

Cons
- Still early in V0 so poorly documented
- State updater functions are not bundled inside of the store; protect it by keeping the store in a module and only `export` updater functions + `useFooStore`
*/

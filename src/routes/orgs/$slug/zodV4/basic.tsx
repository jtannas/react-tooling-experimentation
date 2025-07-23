import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod/v4";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export const Route = createFileRoute("/orgs/$slug/zodV4/basic")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Basic",
		linkDescription: "Demo of basic validation",
	},
});

const Player = z.object({
	username: z.string().min(5).endsWith("e"),
	xp: z.number().positive(),
});

// z.infer turns the schema into a TS type
export type Player = z.infer<typeof Player>;

function RouteComponent() {
	const [username, setUsername] = useState("John Doe");
	const [xp, setXp] = useState(0);
	const player = Player.safeParse({ username, xp });

	return (
		<div>
			<Label>Username</Label>
			<Input
				type="username"
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.currentTarget.value)}
			/>
			<Label>Experience Points</Label>
			<Input
				type="number"
				placeholder="XP"
				value={xp}
				onChange={(e) => setXp(e.currentTarget.valueAsNumber)}
			/>
			<p>Is Valid?: {player.success ? "TRUE" : "FALSE"}</p>
			{!player.success && (
				<p>
					Errors:
					<ul>
						{z
							.prettifyError(player.error)
							.split(/\n/)
							.map((error) => (
								<li key={error}>{error}</li>
							))}
					</ul>
				</p>
			)}
		</div>
	);
}

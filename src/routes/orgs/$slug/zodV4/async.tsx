import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import z from "zod/v4";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export const Route = createFileRoute("/orgs/$slug/zodV4/async")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Async",
		linkDescription: "Demo of validating streamed data",
	},
});

const idToUser = z
	.number()
	.gte(1)
	.transform(async (id, ctx) => {
		// fetch user from database
		await new Promise((resolve) => setTimeout(resolve, 500));
		const user = id === 4 ? undefined : `User: ${id}`;
		if (!user)
			ctx.issues.push({
				code: "custom",
				message: "User Not Found",
				input: id,
			});
		return user;
	});

function RouteComponent() {
	const [num, setNum] = useState(0);
	const [user, setUser] = useState<
		ReturnType<(typeof idToUser)["safeParse"]> | undefined
	>();

	useEffect(() => {
		const fetchUser = async () => {
			const zUser = await idToUser.safeParseAsync(num);
			setUser(zUser);
		};
		fetchUser();
	}, [num]);

	return (
		<div>
			<Label>User Id</Label>
			<Input
				placeholder="XP"
				type="number"
				value={num}
				onChange={(e) => setNum(e.currentTarget.valueAsNumber)}
			/>
			<p>{user?.data}</p>
			{user?.error && (
				<p>
					Errors:
					<ul>
						{z
							.prettifyError(user.error)
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

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import z, { type ZodSafeParseResult } from "zod/v4";
import { Input } from "~/components/ui/input";

const idToUser = z
	.number()
	.gte(1)
	.transform(async (id) => {
		// fetch user from database
		await new Promise((resolve) => setTimeout(resolve, 500));
		return `User: ${id}`;
	});

export const Route = createFileRoute("/orgs/$slug/zodV4/transform")({
	component: RouteComponent,
	staticData: {
		linkTitle: "Transform",
		linkDescription: "Transforming valid results",
	},
});

function RouteComponent() {
	const [num, setNum] = useState(0);
	const [user, setUser] = useState<ZodSafeParseResult<string> | undefined>();

	useEffect(() => {
		const fetchUser = async () => {
			const zUser = await idToUser.safeParseAsync(num);
			setUser(zUser);
		};
		fetchUser();
	}, [num]);

	return (
		<div>
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

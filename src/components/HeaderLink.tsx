import {
	Link,
	type RegisteredRouter,
	type ValidateLinkOptions,
} from "@tanstack/react-router";

export interface HeaderLinkProps<
	TRouter extends RegisteredRouter = RegisteredRouter,
	TOptions = unknown,
> {
	title: string;
	linkOptions: ValidateLinkOptions<TRouter, TOptions>;
}

export function HeadingLink<TRouter extends RegisteredRouter, TOptions>(
	props: HeaderLinkProps<TRouter, TOptions>,
): React.ReactNode;
export function HeadingLink(props: HeaderLinkProps): React.ReactNode {
	return (
		<>
			<h1>{props.title}</h1>
			<Link {...props.linkOptions} />
		</>
	);
}

// demo of how `ValidateLinkOptions` checks that props passed into a link are correct
export const SampleHeaderLink = () => (
	<HeadingLink title="MySampleHeaderLink" linkOptions={{ to: "/" }} />
);

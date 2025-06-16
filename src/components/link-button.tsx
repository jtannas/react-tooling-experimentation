import { createLink } from "@tanstack/react-router";
import * as React from "react";
import { Button } from "./ui/button";

interface BasicLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: React.ComponentPropsWithoutRef<typeof Button>["variant"];
}

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
	(props, ref) => {
		const { variant, ...linkProps } = props;
		return (
			// `asChild` = "Blend this component into the child component"
			// In this case, it's used to make the anchor tag _look_ like a button.
			<Button asChild variant={variant}>
				<a ref={ref} {...linkProps} />
			</Button>
		);
	},
);

export const LinkButton = createLink(BasicLinkComponent);
// `createLink`
// This turns the custom link a browser-based page reload into a router-based navigation.
// It also restores type safety for the routes.

// `createLink` doesn't need to be called on only anchor tags. It can directly convert existing components
/*
const EasyLinkButton = createLink(Button)
*/
// I'm running into type issues w/ `linkOptions` when I do this though. I suspect that the types in that function are a big broken.

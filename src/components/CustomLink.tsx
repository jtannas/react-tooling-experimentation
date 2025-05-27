import { createLink, type LinkComponent } from "@tanstack/react-router";
import { type AnchorHTMLAttributes, forwardRef } from "react";

interface BasicLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	// Add any additional props you want to pass to the anchor element
}

const BasicLinkComponent = forwardRef<HTMLAnchorElement, BasicLinkProps>(
	(props, ref) => (
		<a
			ref={ref}
			className="block px-3 py-2 text-blue-700 [&.active]:font-bold"
			{...props}
		/>
	),
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const CustomLink: LinkComponent<typeof BasicLinkComponent> = (props) => (
	<CreatedLinkComponent preload="intent" {...props} />
);

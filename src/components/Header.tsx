import {
	OrganizationSwitcher,
	UserButton,
	useOrganization,
} from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";

export default function Header() {
	const { organization } = useOrganization();
	return (
		<header className="p-2 flex gap-2 bg-blue-300 text-black justify-between items-center">
			<nav className="flex flex-row items-center">
				<OrganizationSwitcher
					hidePersonal
					afterSelectOrganizationUrl="/orgs/:slug"
					afterCreateOrganizationUrl="/orgs/:slug/landing"
				/>
				{organization?.slug && (
					<Link
						to="/orgs/$slug"
						params={{ slug: organization.slug }}
						className="[&.active]:font-bold"
					>
						Dashboard
					</Link>
				)}
			</nav>

			<UserButton />
		</header>
	);
}

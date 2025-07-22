import { OrganizationSwitcher } from "@clerk/clerk-react";
import { Link, useLocation, useMatches } from "@tanstack/react-router";
import { SidebarIcon } from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { useSidebar } from "~/components/ui/sidebar";

function hasLinkTitle<T extends ReturnType<typeof useMatches>[number]>(
	route: T,
): route is T & { options: { staticData: { linkTitle: string } } } {
	return !!route.staticData.linkTitle;
}

export function SiteHeader() {
	const pathname = useLocation({ select: (loc) => loc.pathname });
	const { toggleSidebar } = useSidebar();
	const matches = useMatches();
	if (matches.some((match) => match.status === "pending")) return null;

	return (
		<header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
			<div className="flex h-(--header-height) w-full items-center gap-2 px-4">
				<Button
					className="h-8 w-8"
					variant="ghost"
					size="icon"
					onClick={toggleSidebar}
				>
					<SidebarIcon />
				</Button>
				<Separator orientation="vertical" className="mr-2 h-4" />
				<Breadcrumb className="hidden sm:block">
					<BreadcrumbList>
						<BreadcrumbItem>
							<OrganizationSwitcher
								hidePersonal
								afterSelectOrganizationUrl="/orgs/:slug"
								afterCreateOrganizationUrl="/orgs/:slug/landing"
							/>
						</BreadcrumbItem>
						{matches.filter(hasLinkTitle).map((match) => (
							<>
								<BreadcrumbSeparator />
								<BreadcrumbItem key={match.pathname}>
									{match.pathname !== pathname && (
										<BreadcrumbLink asChild>
											<Link to={match.pathname}>
												{match.staticData.linkTitle}
											</Link>
										</BreadcrumbLink>
									)}
									{match.pathname === pathname && (
										<BreadcrumbPage>
											{match.staticData.linkTitle}
										</BreadcrumbPage>
									)}
								</BreadcrumbItem>
							</>
						))}
					</BreadcrumbList>
				</Breadcrumb>
				{/* TODO: Figure out how to size this more appropriately*/}
				<div className="block sm:hidden">
					<OrganizationSwitcher
						hidePersonal
						afterSelectOrganizationUrl="/orgs/:slug"
						afterCreateOrganizationUrl="/orgs/:slug/landing"
					/>
				</div>
			</div>
		</header>
	);
}

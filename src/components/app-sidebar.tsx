import { UserButton, useOrganization } from "@clerk/clerk-react";
import { linkOptions } from "@tanstack/react-router";
import {
	Command,
	FormInput,
	Frame,
	Home,
	InspectIcon,
	LifeBuoy,
	PieChart,
	PlaneLanding,
	PlaneTakeoff,
	Send,
	Server,
	Table,
	Vault,
} from "lucide-react";
import type * as React from "react";
import { useMemo } from "react";
import { NavMain } from "~/components/nav-main";
import { NavProjects } from "~/components/nav-projects";
import { NavSecondary } from "~/components/nav-secondary";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "~/components/ui/sidebar";

const navConfig = (slug: string | undefined | null) => {
	const organizationLinks = !slug
		? []
		: [
				{
					title: "Home",
					icon: Home,
					linkOptions: linkOptions({ to: "/orgs/$slug", params: { slug } }),
				},
				{
					title: "Landing",
					icon: PlaneLanding,
					linkOptions: linkOptions({
						to: "/orgs/$slug/landing",
						params: { slug },
					}),
				},
				{
					title: "Tanstack Query",
					icon: Server,
					linkOptions: linkOptions({
						to: "/orgs/$slug/query",
						params: { slug },
					}),
					items: [
						{
							title: "Infinite Queries",
							linkOptions: linkOptions({
								to: "/orgs/$slug/query/infinite",
								params: { slug },
							}),
						},
						{
							title: "Parsing Data",
							linkOptions: linkOptions({
								to: "/orgs/$slug/query/parse",
								params: { slug },
							}),
						},
					],
				},
				{
					title: "Data Stores",
					icon: Vault,
					linkOptions: linkOptions({
						to: "/orgs/$slug/stores",
						params: { slug },
					}),
					items: [
						{
							title: "Tanstack Store",
							linkOptions: linkOptions({
								to: "/orgs/$slug/stores/tanstack",
								params: { slug },
							}),
						},
						{
							title: "Zustand",
							linkOptions: linkOptions({
								to: "/orgs/$slug/stores/zustand",
								params: { slug },
							}),
						},
					],
				},
				{
					title: "Tanstack Table",
					icon: Table,
					linkOptions: linkOptions({
						to: "/orgs/$slug/tables",
						params: { slug },
					}),
				},
				{
					title: "Tanstack Form",
					icon: FormInput,
					linkOptions: linkOptions({
						to: "/orgs/$slug/forms",
						params: { slug },
					}),
				},
				{
					title: "Zod",
					icon: InspectIcon,
					linkOptions: linkOptions({
						to: "/orgs/$slug/zodV4",
						params: { slug },
					}),
					items: [
						{
							title: "Basic",
							linkOptions: linkOptions({
								to: "/orgs/$slug/zodV4/basic",
								params: { slug },
							}),
						},
						{
							title: "Path Params",
							linkOptions: linkOptions({
								to: "/orgs/$slug/zodV4/path/$foo",
								params: { slug, foo: "abc" },
							}),
						},
						{
							title: "Search Params",
							linkOptions: linkOptions({
								to: "/orgs/$slug/zodV4/search",
								params: { slug },
							}),
						},
						{
							title: "Async Validation",
							linkOptions: linkOptions({
								to: "/orgs/$slug/zodV4/async",
								params: { slug },
							}),
						},
						{
							title: "Transforms",
							linkOptions: linkOptions({
								to: "/orgs/$slug/zodV4/transform",
								params: { slug },
							}),
						},
					],
				},
			];
	return {
		navMain: organizationLinks,
		navSecondary: [
			{
				title: "Support",
				url: "#",
				icon: LifeBuoy,
			},
			{
				title: "Feedback",
				url: "#",
				icon: Send,
			},
		],
		projects: [
			{
				name: "Design Engineering",
				url: "#",
				icon: Frame,
			},
			{
				name: "Sales & Marketing",
				url: "#",
				icon: PieChart,
			},
			{
				name: "Travel",
				url: "#",
				icon: PlaneTakeoff,
			},
		],
	};
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { organization } = useOrganization();
	const { slug } = organization ?? {};
	const data = useMemo(() => navConfig(slug), [slug]);

	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]! [view-transition-name:sidebar]"
			{...props}
		>
			<SidebarHeader>
				<div className="flex flex-row gap-2">
					<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
						<Command className="size-4" />
					</div>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-medium">SrsBsnsApp</span>
						<span className="truncate text-xs">A Serious Enterprise</span>
					</div>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<UserButton
							showName
							appearance={{
								elements: {
									userButtonBox: {
										flexDirection: "row-reverse",
									},
								},
							}}
						/>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}

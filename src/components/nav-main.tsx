"use client";

import {
	Link,
	type RegisteredRouter,
	useRouter,
	type ValidateLinkOptions,
} from "@tanstack/react-router";
import { ChevronRight, type LucideIcon } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "~/components/ui/sidebar";

interface LinkConfig<TRouter extends RegisteredRouter, TOptions> {
	title: string;
	linkOptions: ValidateLinkOptions<TRouter, TOptions>;
	icon?: LucideIcon;
}

export function NavMain<TRouter extends RegisteredRouter, TOptions>({
	items,
}: {
	items: (LinkConfig<TRouter, TOptions> & {
		items?: LinkConfig<TRouter, TOptions>[];
	})[];
}) {
	const { flatRoutes } = useRouter();
	const zodRoutes = flatRoutes.filter(
		(r) => r.fullPath.includes("zodV4/") && r.options.staticData.linkTitle,
	);

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Platform</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible key={item.title} asChild defaultOpen>
						<SidebarMenuItem>
							<SidebarMenuButton asChild tooltip={item.title}>
								<Link {...item.linkOptions}>
									{item.icon && <item.icon />}
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
							{item.items?.length ? (
								<>
									<CollapsibleTrigger asChild>
										<SidebarMenuAction className="data-[state=open]:rotate-90">
											<ChevronRight />
											<span className="sr-only">Toggle</span>
										</SidebarMenuAction>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.items?.map((subItem) => (
												<SidebarMenuSubItem key={subItem.title}>
													<SidebarMenuSubButton asChild>
														<Link {...subItem.linkOptions}>
															{subItem.icon && <subItem.icon />}
															<span>{subItem.title}</span>
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</>
							) : null}
						</SidebarMenuItem>
					</Collapsible>
				))}
				{zodRoutes.map((r) => (
					<Collapsible key={r.id} asChild defaultOpen>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								tooltip={r.options.staticData.linkTitle || "Zod Example"}
							>
								<Link to={r.fullPath}>
									<span>{r.options.staticData.linkTitle}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}

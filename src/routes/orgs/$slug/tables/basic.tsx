import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orgs/$slug/tables/basic')({
  component: RouteComponent,
  staticData: { linkTitle: "Basic Table", linkDescription: "A simple data table" }
})

function RouteComponent() {
  return <div>Hello "/orgs/$slug/tables/basic"!</div>
}

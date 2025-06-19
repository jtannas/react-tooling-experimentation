import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orgs/$slug/forms/basic')({
  component: RouteComponent,
  staticData: { linkTitle: "Basic Form", linkDescription: "A simple form" }
})

function RouteComponent() {
  return <div>Hello "/orgs/$slug/forms/basic"!</div>
}

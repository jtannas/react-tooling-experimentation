import { createFileRoute } from '@tanstack/react-router'
import { useAppUser } from '~/integrations/clerk/userProvider'

export const Route = createFileRoute('/_auth/protected')({
  component: RouteComponent,
})

function RouteComponent() {
  const user = useAppUser()
  return <div>Hello {user.fullName}!</div>
}

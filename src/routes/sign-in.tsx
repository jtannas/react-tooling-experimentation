import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
   <>
      <SignedIn>
         <p>Already signed in!</p>
      </SignedIn>
      <SignedOut>
         <RedirectToSignIn/>
      </SignedOut>
   </>
  )
}

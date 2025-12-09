import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Navigation } from '@/components/Navigation'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <p>
          © 2024{new Date().getFullYear() > 2024 ? `-${new Date().getFullYear()}` : ''} yuu1111. All
          rights reserved.
        </p>
      </footer>
    </div>
  )
}

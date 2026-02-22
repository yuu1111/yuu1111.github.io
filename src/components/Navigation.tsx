import { Link, useRouterState } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

/**
 * @description ナビゲーションメニューの項目一覧
 */
const navItems = [
  { path: '/', label: 'Blog' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
  { path: '/links', label: 'Links' },
] as const

/**
 * @description サイト共通のナビゲーションヘッダー
 */
export function Navigation() {
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPath === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  isActive ? 'text-foreground' : 'text-foreground/60',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

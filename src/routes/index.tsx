import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        Welcome
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        ポートフォリオサイトへようこそ。
        開発者としての活動やプロジェクトを紹介しています。
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/about">About Me</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/portfolio">Portfolio</Link>
        </Button>
      </div>
    </div>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/blog/')({
  component: BlogIndexPage,
})

// ブログ記事のメタデータ（実際のプロジェクトではmdxから自動生成）
const posts = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    description: '最初のブログ記事です。',
    date: '2024-12-10',
  },
  {
    slug: 'getting-started',
    title: 'Getting Started with React',
    description: 'Reactの始め方について解説します。',
    date: '2024-12-09',
  },
]

function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }}>
            <Card className="transition-colors hover:bg-card/80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

import postsData from '@data/posts.json'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Post } from '@/types/post'

const posts: Post[] = postsData

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
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
                  <span className="text-sm text-muted-foreground">{post.date}</span>
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

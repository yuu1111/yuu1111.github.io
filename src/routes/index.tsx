import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PostFrontmatter {
  title: string
  date: string
  description?: string
}

const postModules = import.meta.glob<{ frontmatter: PostFrontmatter }>('@content/blog/*.mdx', {
  eager: true,
})

const posts = Object.entries(postModules)
  .map(([path, module]) => {
    const slug = path.split('/').pop()?.replace('.mdx', '') ?? ''
    return {
      slug,
      ...module.frontmatter,
    }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

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
                {post.description && <CardDescription>{post.description}</CardDescription>}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import type { ComponentType } from 'react'
import { Button } from '@/components/ui/button'
import type { PostFrontmatter } from '@/types/mdx.d'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

/**
 * @description MDXブログ記事モジュールの一括インポート
 */
const posts: Record<string, { default: ComponentType; frontmatter?: PostFrontmatter }> =
  import.meta.glob('@content/blog/*.mdx', { eager: true })

/**
 * @description ブログ記事の個別表示ページ
 */
function BlogPostPage() {
  const { slug } = Route.useParams()

  const postPath = Object.keys(posts).find((path) => path.endsWith(`/${slug}.mdx`))
  const post = postPath ? posts[postPath] : null

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold mb-4">記事が見つかりません</h1>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ブログ一覧へ戻る
          </Link>
        </Button>
      </div>
    )
  }

  const Content = post.default
  const frontmatter = post.frontmatter

  return (
    <div className="max-w-3xl mx-auto">
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          ブログ一覧へ戻る
        </Link>
      </Button>

      {frontmatter && (
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
          <p className="text-muted-foreground">{frontmatter.date}</p>
        </header>
      )}

      <article className="prose">
        <Content />
      </article>
    </div>
  )
}

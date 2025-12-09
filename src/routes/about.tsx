import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>自己紹介</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">ここに自己紹介を書いてください。</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>スキル</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {['TypeScript', 'React', 'Bun'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

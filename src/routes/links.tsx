import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/links')({
  component: LinksPage,
})

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/yuu1111',
    description: 'ソースコードやプロジェクト',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    description: 'つぶやき',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/',
    description: '技術記事',
  },
]

function LinksPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Links</h1>

      <div className="space-y-4">
        {links.map((link) => (
          <Card key={link.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{link.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                {link.description}
              </p>
              <Button variant="ghost" size="sm" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

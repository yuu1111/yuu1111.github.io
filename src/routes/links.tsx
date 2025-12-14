import linksData from '@data/links.json'
import {
  SiGithub,
  SiInstagram,
  SiOsu,
  SiSteam,
  SiTwitch,
  SiX,
} from '@icons-pack/react-simple-icons'
import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, Gamepad2, Gift, Globe, Users } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Link } from '@/types/link'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const iconMap: Record<string, IconComponent> = {
  Twitter: SiX,
  Instagram: SiInstagram,
  Twitch: SiTwitch,
  GitHub: SiGithub,
  Steam: SiSteam,
  'osu!': SiOsu,
}

const categoryConfig = {
  social: { label: 'SNS', icon: Users },
  development: { label: 'Development', icon: Globe },
  gaming: { label: 'Gaming', icon: Gamepad2 },
  wishlist: { label: 'Wishlist', icon: Gift },
} as const

const links = linksData as Link[]

const groupedLinks = links.reduce(
  (acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = []
    }
    acc[link.category].push(link)
    return acc
  },
  {} as Record<string, Link[]>,
)

export const Route = createFileRoute('/links')({
  component: LinksPage,
})

function LinksPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Links</h1>

      <div className="space-y-8">
        {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((category) => {
          const categoryLinks = groupedLinks[category]
          if (!categoryLinks?.length) return null

          const config = categoryConfig[category]
          const CategoryIcon = config.icon

          return (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon className="h-5 w-5" />
                  {config.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categoryLinks.map((link) => {
                  const Icon = iconMap[link.name]
                  return (
                    <Button
                      key={link.name}
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {Icon ? (
                          <Icon className="mr-3 h-4 w-4" />
                        ) : (
                          <ExternalLink className="mr-3 h-4 w-4" />
                        )}
                        <span className="flex-1 text-left">{link.name}</span>
                        {link.username && (
                          <span className="text-muted-foreground text-sm">{link.username}</span>
                        )}
                        {link.description && (
                          <span className="text-muted-foreground text-sm">{link.description}</span>
                        )}
                      </a>
                    </Button>
                  )
                })}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

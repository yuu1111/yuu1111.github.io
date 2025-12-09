import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Github, Twitter } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const contacts = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:example@example.com',
    label: 'example@example.com',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yuu1111',
    label: '@yuu1111',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/',
    label: '@username',
  },
]

function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact</h1>

      <Card>
        <CardHeader>
          <CardTitle>連絡先</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contacts.map((contact) => (
            <Button
              key={contact.name}
              variant="outline"
              className="w-full justify-start"
              asChild
            >
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <contact.icon className="mr-3 h-5 w-5" />
                <span className="flex-1 text-left">{contact.name}</span>
                <span className="text-muted-foreground">{contact.label}</span>
              </a>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

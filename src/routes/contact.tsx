import contactsData from '@data/contacts.json'
import { createFileRoute } from '@tanstack/react-router'
import { Github, type LucideIcon, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Contact } from '@/types/contact'

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Github,
  Twitter,
}

const contacts: Contact[] = contactsData

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact</h1>

      <Card>
        <CardHeader>
          <CardTitle>連絡先</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contacts.map((contact) => {
            const Icon = iconMap[contact.icon]
            return (
              <Button key={contact.name} variant="outline" className="w-full justify-start" asChild>
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  {Icon && <Icon className="mr-3 h-5 w-5" />}
                  <span className="flex-1 text-left">{contact.name}</span>
                  <span className="text-muted-foreground">{contact.label}</span>
                </a>
              </Button>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}

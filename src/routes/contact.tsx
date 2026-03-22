import contactsData from "@data/contacts.json";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Contact } from "@/types/contact";
import type { IconComponent } from "@/types/icon";

/**
 * @description 連絡先アイコンのマッピング
 */
const iconMap: Record<string, IconComponent> = {
	Mail,
	Github: SiGithub,
	Twitter: SiX,
};

/**
 * @description 連絡先データ
 */
const contacts: Contact[] = contactsData;

export const Route = createFileRoute("/contact")({
	component: ContactPage,
});

/**
 * @description 連絡先一覧ページ
 */
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
						const Icon = iconMap[contact.icon];
						return (
							<Button
								key={contact.name}
								variant="outline"
								className="w-full justify-start"
								asChild
							>
								<a href={contact.url} target="_blank" rel="noopener noreferrer">
									{Icon && <Icon className="mr-3 h-5 w-5" />}
									<span className="flex-1 text-left">{contact.name}</span>
									<span className="text-muted-foreground">{contact.label}</span>
								</a>
							</Button>
						);
					})}
				</CardContent>
			</Card>
		</div>
	);
}

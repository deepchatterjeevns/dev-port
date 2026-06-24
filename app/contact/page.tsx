import { Metadata } from "next";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Deep Chatterjee for DevOps consulting and collaboration.",
};

export default function ContactPage() {
    return (
        <div className="container max-w-2xl py-24">
            <div className="space-y-2 mb-8">
                <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
                <p className="text-muted-foreground text-lg">
                    Have a project in mind? Send me a message and let's discuss how I can help.
                </p>
            </div>
            <ContactForm />
        </div>
    );
}

"use client"


import { useState } from "react"
import { Send, Mail, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
  }),
});

    if(response.ok) {
      setSubmitted(true);
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Section header */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Ponte en Contacto
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Cuéntanos tu visión y te responderemos dentro de las próximas 24 horas.
            </p>
          </div>

          {/* Contact form */}
          {submitted ? (
            <div className="mt-12 rounded-2xl border border-accent/50 bg-accent/10 p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Send className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">¡Mensaje enviado!</h3>
              <p className="mt-2 text-muted-foreground">
                Gracias por contactarnos. Nos comunicaremos contigo pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    required
                    className="h-12 pl-10 bg-card border-border"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    required
                    className="h-12 pl-10 bg-card border-border"
                  />
                </div>
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                  className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 pl-10 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
